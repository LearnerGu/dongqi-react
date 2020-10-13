import { message } from 'ant-design-vue'


var websock = null;
var global_callback = null;
var connectingTimes = 0
// var timeInterval = null
 
function initWebSocket(){ //初始化websocket
    //ws地址
    var wsuri = "ws:localhost:2222/websocket/monitor"; //ws:172.16.10.51:2222/websocket/monitor
    // var wsuri = "ws:10.0.5.141:2222/websocket/gate";
    // var wsuri = "ws:172.16.10.51:2222/websocket/monitor";
    console.log('正在连接');
    
    websock = new WebSocket(wsuri);
    websock.onmessage = function(e){
    	websocketOnmessage(e);
    } 
    websock.onclose = function(e){
    	websocketClose(e);
    }
    websock.onopen = function () {
	    websocketOpen();
	}
    
    //连接发生错误的回调方法
	websock.onerror = function () {
		websocketError()
	}
}
 
// 实际调用的方法
function sendSock(agentData, callback){  
    global_callback = callback;
    // 如果未建立连接
    if (websock == null || websock.readyState === 3) {
        websock = null
        initWebSocket()
    } else if (websock.readyState === 1) {
    	//若是ws开启状态
        websocketSend(agentData)
    } else {
        // 若是其他状态 ，则等待1s后重新调用
        setTimeout(function () {
            sendSock(agentData,callback);
        }, 1000);
    }
}
 
//数据接收
function websocketOnmessage(e){ 
    global_callback(toObj(e.data));
}

// 将返回的字符串转化为对象
function toObj(str) {
    return Function('"use strict";return (' + str + ')')();
}
 
//数据发送
function websocketSend(agentData){
    websock.send(JSON.stringify(agentData))
//   timeInterval = setInterval(function(){ websock.send(JSON.stringify(agentData)) }, 2000);  
}
 
//关闭
function websocketClose(e){  
    console.log("websocket连接关闭 (" + e.code + ")");
}

// 连接成功
function websocketOpen(e){
	console.log("websocket连接成功");
}

// 连接失败重连
function websocketError() {
    if (connectingTimes <3) {
        console.log("WebSocket连接发生错误,正在尝试重连");
        websock.close()
        // console.log(websock.readyState);
        if (websock.readyState == 3) {
            websock = null
            initWebSocket()
            connectingTimes += 1
            console.log(connectingTimes);
        }  
        // console.log(connectingTimes);
    } else {
        // console.log('websoc无法连接');
        message.error('websocket连接失败')
        websock.close()
        websock = null
        connectingTimes = 0
        console.log(connectingTimes);
        
    }
}

// 主动断开websocket连接
function closeWebsocket() {
  websock.close();
//   clearInterval(timeInterval);
}

function state() {
    return websock.readyState
}
 
export{initWebSocket, sendSock, closeWebsocket, state}
