// 应用根组件
import React, { Component } from "react"
import { Button, message } from 'antd'
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

class App extends Component {

    handleClick = () => {
        message.success('成功啦...');
    }

    render() {
        return (
            // <Button type='primary' onClick={this.handleClick}></Button>
            <BrowserRouter>
                <Switch>
                    <Route path="/Login" component={Login} />
                    <Route path="/Admin" component={Admin} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App