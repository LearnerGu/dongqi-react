export const menuList = [
  {
    menuId:0,
    menuText: '实时数据',
    menuPath: '/layout/realtimeData',
    children: [
      {
        menuId:0,
        key: 'dataList',
        menuText: '数据列表',
        menuPath: '/layout/realtimeData/dataList',
      },
      {
        menuId:0,
        key: 'trendContrast',
        menuText: '趋势对比',
        menuPath: '/layout/realtimeData/trendContrast',
      },
      {
        menuId:0,
        key: 'listContrast',
        menuText: '列表对比',
        menuPath: '/layout/realtimeData/listContrast',
      }
    ]
  },
  {
    menuId:1,
    menuText: '历史数据',
    menuPath: '/layout/historicalData',
    children: [
      {
        menuId:1,
        key: 'listData',
        menuText: '列表数据',
        menuPath: '/layout/historicalData/listData',
      },
      {
        menuId:1,
        key: 'trendCurve',
        menuText: '趋势曲线',
        menuPath: '/layout/historicalData/trendCurve',
      }
    ]
  },
  {
    menuId:2,
    menuText: '报表系统',
    menuPath: '/layout/reportSystem',
  },{
    menuId:3,
    menuText: '日志记录',
    menuPath: '/layout/logRecord',
  },
  {
    menuId:4,
    menuText: '故障录波',
    menuPath: '/layout/faultRecord',
  },
  {
    menuId:5,
    imgUrl: require('../assets/images/home/logo_left.png'),
    alt: '首页',
    class: 'logo-left',
    menuPath: '/layout/home',
  },
  {
    menuId:6,
    imgUrl: require('../assets/images/home/logo_right.png'),
    alt: '主控页',
    class: 'logo-right',
    menuPath: '/layout/mastercontroll',
  },
  {
    menuId:7,
    menuText: '历史报警',
    menuPath: '/layout/historicalAlarm',
  },
  {
    menuId:8,
    menuText: '群起群停',
    menuPath: '/layout/multiStopMultiStart',
  },
  {
    menuId:9,
    menuText: '参数设置',
    menuPath: '/layout/paramsSetting',
  },
  {
    menuId:10,
    menuText: '系统设置',
    menuPath: '/layout/sysSetting',
  },
  {
    menuId:11,
    menuText: '用户管理',
    menuPath: '/layout/userManagement',
  }
]
