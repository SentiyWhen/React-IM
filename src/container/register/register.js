import React from 'react'
import Logo from '../../component/logo/logo' 
import {Radio, List, InputItem, Button, WingBlank, WhiteSpace} from 'antd-mobile'

 
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            type:'genius'
        }
    }

    render(){
        const RadioItem = Radio.RadioItem

        return(
            <div>
                <Logo/>
                <h2>注册页</h2>
                <WingBlank>
                    <List>
                        <InputItem>用户名</InputItem>
                        <InputItem>密码</InputItem>
                        <InputItem>确认密码</InputItem>
                    </List>
                    <RadioItem  checked={this.state.type == 'genius'}>
                    牛人    
                    </RadioItem>
                    <RadioItem  checked={this.state.type == 'boss'}>
                    BOSS    
                    </RadioItem>
                    <WhiteSpace/>
                    <Button type='primary'>确定</Button>
                    
                </WingBlank>
            </div>
        )
    }
}

export default Register