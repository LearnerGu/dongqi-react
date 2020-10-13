<template>
  <div class="test">
    <button @click="startWebsocket">测试websocket</button>
    <button @click="closeWebsocket">断开连接</button>
    <a-button @click="getSockData">请求数据</a-button>
  </div>
</template>

<script>
  export default {
    name : 'test',
    data() {
      return {
        socket: null,
        timeInterval: null,
        socketInterval: null,
        agentData: {
          operation: 'queryMultipleByPage',
          pageName: 'mainScreen'
        }
      }
    },
    created() {
    },
    destroyed() {
      // this.socket.close() //离开路由之后断开websocket连接
      // clearInterval(this.timeInterval);
      clearInterval(this.socketInterval)
    },
    methods: {
      // initWebSocket2() {
      //   if(typeof(WebSocket)=="undefined"){
      //     console.log("浏览器不支持WebSocket")
      //   }else{

      //     var then = this
      //     this.socket = new WebSocket("ws:localhost:2222/websocket/gate");
      //     this.socket.onopen = function (){
      //       console.log("Socket已打开");
      //       var obj=new Object();
      //       obj.operation="queryMultiple";
      //       obj.pageName="mainScreen";
      //       var that = this
      //       then.timeInterval = setInterval(function(){ that.send(JSON.stringify(obj)); }, 2000);
      //       //socket.send("客户端消息"+location.href+new Date());
      //     };
      //     this.socket.onmessage = function(msg){
      //       console.log(msg.data);
      //     };
      //     this.socket.onclose = function(){
      //       console.log("Socket已关闭")
      //     };
      //     this.socket.onerror = function(event){
      //       //console.log("Socket错误")
      //       console.error("Socket错误:",event);
      //     };
      //   }
      // },
      startWebsocket () {
        // 初始化websocket
        this.$socketApi.initWebSocket();
        console.log('dakai');
        
        const agentData = {
          operation: 'queryMultiple',
          pageName: 'mainScreen'
        }
        // 连接成功发送数据
        // this.$socketApi.sendSock(agentData,this.getConfigResult);
        setInterval(this.getSockData,2000)
      },
      closeWebsocket() {
        clearInterval(this.socketInterval)
        // 主动断开websocket连接
        this.$socketApi.closeWebsocket();
      },
      getConfigResult(data) {
        console.log(data);
      },
      getSockData() {
        this.$socketApi.sendSock(this.agentData,this.getConfigResult)
      }
    },
  }
</script>
<style lang='less'>
 
</style>
