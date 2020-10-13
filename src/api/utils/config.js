/**
 * 接口参数配置
 */
const baseUrl = 'http://39.104.79.47:8001'
const socketUrl = 'ws:172.16.9.80:9003/websocket/echo' //echo websocket地址
const statusCode = {
  internalServerError: 500,
  responseSuccess: 200,
  /* 用户相关（40XXX） */
  tokenError: 40101,
  tokenExpire: 40102,
  pswError: 40103,
  userLogout: 40104,
  userNotExist: 40105,
  userAlreadyExist: 40106,
  userUnabled: 40107,
  identifyCodeError: 40108,
  /* 前端请求相关（41XXX） */
  parameterNull: 41101,
  parameterInvalid: 41102,
  tooManyRequest: 41103,
  /* 文件上传下载相关（42XXX） */
  fileEmpty: 42101,
  /* 数据库相关（43XXX） */
  dbNoResult: 43101,
  /* Redis相关（44XXX） */
  /* 远程服务调用（45XXX） */
  feignError: 45101,
  /* 服务鉴权（46XXX） */
  /* 其它（47XXX） */
  exOther: 47101
}
export { baseUrl, socketUrl, statusCode }
