import service from '../utils/http'
import paths from '../utils/paths'

// 登录类数据接口

 const Login= {
    //  登录接口
    login(params) {
        return service.post(paths.login, params);
    },
    // 获取风机、生产报表、运行报表元数据
    listTurbineMetas(){
        return service.get(paths.listTurbineMetas);
    },
    // 获取所有环线和风机的接口
    turbineAndRing() {
        return service.post(paths.turbineAndRing);
    }
 } 


export default Login
