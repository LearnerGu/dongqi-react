import React from 'react';
import './App.css';
import { message } from 'antd'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './views/login/Login'
import Register from './views/login/Register'
import ForgetPwd from './views/login/ForgetPwd'
import MyLayout from './views/layout/MyLayout'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forget" component={ForgetPwd} />
          <Route path="/layout" component={MyLayout} />
          <Redirect from="/" exact to="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
