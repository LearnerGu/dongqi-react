import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.less'
import api from '../../api/utils/index'

export default class Login extends Component {
  validatePwd = (rule, value, callback) => {
    value = value.trim();
    if(!value) {
      callback('密码必须输入！')
    }else if (value.length < 4) {
      callback('密码必须大于4位！')
    }else if (value.length > 12) {
      callback('密码必须小于12位！')
    }else if (! /^[a-zA-Z0-9_]+$/.test(value)) {
      callback('密码必须由英文、数字或下划线组成！')
    }else {
      callback() //验证通过
    }
  }
  // 登录成功后，将表单信息和token存放到localStorage中
  handleLogin = (path, loginInfo) => {
    console.log(loginInfo);
    // localStorage.setItem('userInfo', JSON.stringify(loginInfo.data))
    sessionStorage.setItem('userInfo', JSON.stringify(loginInfo.data.userAccount))
    // localStorage.setItem('token', loginInfo.msg)
    sessionStorage.setItem('token', loginInfo.msg)
    //console.log(this);
    this.props.history.replace(path);
  }
  
  render() {
    const onFinish = values => {
      api.Login.login(values).then(res => {
        if(res.code === 200) {
          message.success('登录成功');
          this.handleLogin('/layout', res)
          // console.log(this);
        }else {
          message.error(res.msg)
        }
      })
    };
    return (
      <div className="login-page">
        <div className="system-title">东方电气风机监控系统</div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="welcome"
              style={{borderBottom: '1px solid #e8e8e8'}}
            >
              <span style={{fontSize:'18px', fontWeight: 600, color: 'rgb(123, 224, 245)', letterSpacing: '4px'}}>欢迎登录</span>
            </Form.Item>
            <Form.Item
              name="account"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
                {
                  min: 4,
                  message: 'username must be at least 4 characters!',
                },
                {
                  max: 12,
                  message: 'username must be at most 12 characters!',
                },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: 'username must be consisted by letter, number and underline!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="certificate"
              rules={[
                {
                  validator: this.validatePwd
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住账户</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="/forget">
                忘记密码
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              Or <a href="/register">注册!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
