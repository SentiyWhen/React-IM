import React from 'react'
import Logo from '../../component/logo/logo' 
import {List, InputItem, Button, WingBlank, WhiteSpace} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/user.redux'

@connect(
	state=>state.user,
	{login}
)
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:'',
            pwd:''
        }
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        
    }
    handleChange(key,val){
        console.log(`${key}--${val}`)
		this.setState({
			[key]:val
		})
	}
    register(){
        this.props.history.push('/register')
    }
    handleLogin(){
        this.props.login(this.state)
    }
    

    render(){
        return(
            <div>
                {this.props.redirectTo? <Redirect to={this.props.redirectTo} />:null}
                <Logo/>
                <WingBlank>
                    <List>
                        {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                        <InputItem onChange={v=>this.handleChange('user',v)} >用户名</InputItem>
                        <InputItem onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.handleLogin}>登陆</Button>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
                
            </div>
        )
    }
}

export default Login