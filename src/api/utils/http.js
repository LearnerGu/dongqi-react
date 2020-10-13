import axios from 'axios'
import {baseUrl, statusCode} from './config'
import store from '../../store/index'
import router from '../../router/index'
// import QS from 'qs'
import { message } from 'antd'

let CancelToken = axios.CancelToken;
let cancel;
// 正在进行中的请求列表
let reqList = []

/**
 * 跳转至登录页
 */
const reLogin = () => {
    router.replace({
    path: 'login',
    query: {
        redirect: router.currentRoute.fullPath
    }
    })
}

/**
 * 阻止重复请求
 * @param {array} reqList - 请求缓存列表
 * @param {string} url - 当前请求地址
 * @param {function} cancel - 请求中断函数
 * @param {string} errorMessage - 请求中断时需要显示的错误信息
 */
const stopRepeatRequest = function (reqList, url, cancel, errorMessage) {
    const errorMsg = errorMessage || ''
    for (let i = 0; i < reqList.length; i++) {
      if (reqList[i] === url) {
        cancel(errorMsg)
        return
      }
    }
    reqList.push(url)
  }



/**
 * 允许某个请求可以继续进行
 * @param {array} reqList 全部请求列表
 * @param {string} url 请求地址
 */
const allowRequest = function (reqList, url) {
    for (let i = 0; i < reqList.length; i++) {
      if (reqList[i] === url) {
        reqList.splice(i, 1)
        break
      }
    }
  }
 
  
/**
 * 错误处理
 * @param { number } status 状态码
 * @param { string } other 其他
 */
const errorHandle = (status, message) => {
    switch (status) {
        case 401:
            message.error('操作超时，请重新登录！')
            reLogin()
            break
        case statusCode.tokenExpire:
            // message.error(message)
            reLogin()
            break
        case 403:
            message.error('无访问权限')
            break
        case statusCode.internalServerError:
            // message.error('服务器异常!')
            break
        default:
            // message.error(message)
    }
}


// 创建axios实例
let service = axios.create({
    timeout: 5000,

});

// 环境的切换
if (process.env.NODE_ENV === 'development') {    
    service.defaults.baseURL = '/api';
} else if (process.env.NODE_ENV === 'debug') {    
    service.defaults.baseURL = '';
} else if (process.env.NODE_ENV === 'production') {    
    service.defaults.baseURL = baseUrl;
}


//设置post请求头
service.defaults.headers.common['access-token'] = localStorage.getItem('token')
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// service.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// service.defaults.baseURL = $core.use('http') //确认协议和地址
service.defaults.withCredentials = true;   // axios 默认不发送cookie，需要全局设置true发送cookie

/**
 * 请求拦截器
 * 简单的防止恶意程序批量刷接口
 * 每次请求前进行时间判断处理,两次请求的时间间隔小于500ms就取消此次请求，大于500ms才发送
 */

service.interceptors.request.use(
    config => {
        // 每次发送请求之前判断vuex中是否存在token        
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
        // const token = store.state.token;
        // token && (config.headers.Authorization = token);
        // config.headers['access-token'] = sessionStorage.getItem('token');
        // config.cancelToken = new CancelToken(c => cancel = c);
        // let time = new Date().getTime();
        // let storeTime = store.state.time;
        // let gapTime = time - storeTime;
        // if(gapTime < 500) {
        //     cancel('请求过于频繁!');
        // }
        // // 阻止重复请求。当上个请求未完成时，相同的请求不会进行
        // // stopRepeatRequest(reqList, config.url, cancel, `${config.url} 请求被中断`)
        // store.commit('setTime', time);
        // store.commit('isLoading', true);
        return config;
    },
    error => {
        Promise.err(error);
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    // 请求成功
    res => {
        // 增加延迟，相同请求不得在短时间内重复发送
        // setTimeout(() => {
        //     allowRequest(reqList, res.config.url)
        // }, 1000)
        //store.commit('isLoading', false)
        return res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res.statusText);
    },
    // 请求失败
    error => {
        //store.commit('isLoading', false)
        if(error) {
            if(error.response) {
                let httpError = {
                    hasError: true,
                    status: error.response.status,
                    statusText: error.response.statusText
                }
                // store.commit('on_http_error', httpError)
                errorHandle(httpError.status, httpError.statusText);
            }else {
                message.error('请求超时， 请重试!')
            }
            return Promise.reject(error)
        }else {
            message.error('网络异常')
        }
    }
);

/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */

function get(url, params) {
    return new Promise((resolve, reject) => {
        service.get(`${baseUrl}${url}`, {
            params: params,
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.message);
        });
    })
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */

function post(url, params) {
    return new Promise((resolve, reject) => {
        service.get(`${baseUrl}${url}`, JSON.stringify(params)).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.message);
        });
    })
}

export default service


