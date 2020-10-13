import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout, Avatar } from 'antd';
import './MyLayout.less'
import NavBar from '../../components/nav-bar/NavBar'
import Home from '../main/home/Home'
import MasterControl from '../main/master-control/MasterControl'
import ListData from '../data/historicalData/listData/ListData'
import TrendCurve from '../data/historicalData/trendCurve/TrendCurve'
import DataList from '../data/realtimeData/dataList/DataList'
import ListContrast from '../data/realtimeData/listContrast/ListContrast'
import TrendContrast from '../data/realtimeData/trendContrast/TrendContrast'
import FaultRecord from '../log/faultRecord/FaultRecord'
import HistoricalAlarm from '../log/historicalAlarm/HistoricalAlarm'
import LogRecord from '../log/logRecord/LogRecord'
import ReportSystem from '../log/reportSystem/ReportSystem'
import MultiSMultiS from '../setting/multiSMultiS/MultiSMultiS'
import ParamsSetting from '../setting/paramsSetting/ParamsSetting'
import SysSetting from '../setting/sysSetting/SysSetting'
import UserManagement from '../setting/userManagement/UserManagement'
const { Header, Footer, Content } = Layout;
export default class MyLayout extends Component {
  state = {
    userName: ''
  }
  componentDidMount() {
    this.setState({
      userName: JSON.parse(sessionStorage.getItem('userInfo'))
    })
  }
  render() {
    return (
      <Layout style={{height: '100%'}}>
        <Header style={{position: 'relative'}}>
          <NavBar />
    <Avatar style={{position: 'absolute', right: '2%', top: '37%', backgroundColor: '#7265e6'}} size="large">{this.state.userName}</Avatar>
        </Header>
        <Content>
          <Switch>
            <Route path='/layout/home' exact component={Home} />
            <Route path='/layout/mastercontroll' exact component={MasterControl} />
            <Route path='/layout/historicalData/listData' exact component={ListData} />
            <Route path='/layout/historicalData/trendCurve' exact component={TrendCurve} />
            <Route path='/layout/realtimeData/dataList' exact component={DataList} />
            <Route path='/layout/realtimeData/ListContrast' exact component={ListContrast} />
            <Route path='/layout/realtimeData/TrendContrast' exact component={TrendContrast} />
            <Route path='/layout/faultRecord' exact component={FaultRecord} />
            <Route path='/layout/historicalAlarm' exact component={HistoricalAlarm} />
            <Route path='/layout/logRecord' exact component={LogRecord} />
            <Route path='/layout/reportSystem' exact component={ReportSystem} />
            <Route path='/layout/multiStopMultiStart' exact component={MultiSMultiS} />
            <Route path='/layout/paramsSetting' exact component={ParamsSetting} />
            <Route path='/layout/sysSetting' exact component={SysSetting} />
            <Route path='/layout/userManagement' exact component={UserManagement} />
            <Redirect from="/layout" exact to="/layout/home" />
            <Redirect from="/layout/realtimeData" exact to="/layout/realtimeData/dataList" />
            <Redirect from="/layout/historicalData" exact to="/layout/historicalData/listData" />
          </Switch>
        </Content>
        <Footer>Semantic Versioning 2.0.0</Footer>
      </Layout>
    )
  }
}
