// 网络请求对应的url
const commonUrl ={
    loginRegister: '/background/loginRegister',
    alarmhistory: '/historyData'
}
export default {
    // 登录
    login: `${commonUrl.loginRegister}/passwordLogin`,
    listTurbineMetas: `${commonUrl.loginRegister}/listTurbineMetas`,
    turbineAndRing: `${commonUrl.loginRegister}/turbineAndRing`,

    listallUsers: `${commonUrl.loginRegister}/listAllUsers`,
    adduser: `${commonUrl.loginRegister}/addUser`,
    deleteaccounts: `${commonUrl.loginRegister}/deleteAccounts`,
    updatepsw: `${commonUrl.loginRegister}/updatePsw`,
    updaterole: `${commonUrl.loginRegister}/updateRole`,
    listProduceStatistics: `${commonUrl.loginRegister}/listProduceStatistics`,
    listPowerSpeedStatistics: `${commonUrl.loginRegister}/listPowerSpeedStatistics`,
    listWindRoseStatistics: `${commonUrl.loginRegister}/listWindRoseStatistics`,
    // 历史报警
    getAlarmHistoryMeta:`${commonUrl.alarmhistory}/getAlarmHistoryMeta`,
    getAlarmHistory: `${commonUrl.alarmhistory}/getAlarmHistory`,
    getAlarmHistoryCount: `${commonUrl.alarmhistory}/getAlarmHistoryCount`,
    getAlarmType: `${commonUrl.alarmhistory}/getAlarmType`,
    // 历史数据
    getHistoryMeta: `${commonUrl.alarmhistory}/getHistoryMeta`,
    getHistoryDataCurve: `${commonUrl.alarmhistory}/getHistoryDataCurve`,
    getHistoryData: `${commonUrl.alarmhistory}/getHistoryData`,
    getHistoryMeta2:`${commonUrl.alarmhistory}/getHistoryMeta2`,

    listRunStatisticsDetails: `${commonUrl.loginRegister}/listRunStatisticsDetails`,
    listStandardPowerSpeedStatistics: `${commonUrl.loginRegister}/listStandardPowerSpeedStatistics`,
    // 日志记录
    operatelog: `${commonUrl.loginRegister}/operatelog`,
    getDistinctUserName: `${commonUrl.loginRegister}/getDistinctUserName`,
    // 实时报警
    voiceBroadCast: `${commonUrl.alarmhistory}/voiceBroadCast`,
    getRealAlarm: `${commonUrl.alarmhistory}/getRealAlarm`,
    updateReset: `${commonUrl.alarmhistory}/updateReset`,
    getAlarmNum: `${commonUrl.alarmhistory}/getAlarmNum`,
    getRealTimeAlarm2: `${commonUrl.alarmhistory}/getRealTimeAlarm2`,
    // 系统设置
    updateWindFarm: `${commonUrl.loginRegister}/updateWindFarm`,
    listOneWindFarm: `${commonUrl.loginRegister}/listOneWindFarm`,
    turbineAndRing: `${commonUrl.loginRegister}/turbineAndRing`,
    addNewTurbine: `${commonUrl.loginRegister}/addNewTurbine`,
    deleteTurbineById: `${commonUrl.loginRegister}/deleteTurbineById`,
    addNewRing: `${commonUrl.loginRegister}/addNewRing`,
    updateRingName: `${commonUrl.loginRegister}/updateRingName`,
    deleteOldRing: `${commonUrl.loginRegister}/deleteOldRing`,
    // 故障录播
    getAlarmDetails: `${commonUrl.alarmhistory}/getAlarmDetails`,
    getSnapshotTableMetas: `${commonUrl.alarmhistory}/getSnapshotTableMetas`,
    screenSnapshot: `${commonUrl.alarmhistory}/screenSnapshot`
}
