import React, { Component } from 'react';
import { Form,Icon, Input, Button } from 'antd';

import logo from "./images/logo.ba1f87ec.png";
import './login.less';


const { Item } = Form.Item;


class Login extends Component {

    handleSubmit = e => {
        //阻止事件的默认行为，阻止表单的提交
        e.preventDefault();
        alert('发送登录的ajax请求')
    };

    render() {
        // const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>React项目：后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登录</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />
                        </Item>
                        <Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </Item>
                    </Form>
                </div>
            </div>
        );
    };

};



export default Login;
