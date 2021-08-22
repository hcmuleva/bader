import React, { useState,useEffect } from 'react';

import { Button, Form, Input } from 'antd';
import axios from 'axios'
import './../../assets/css/loginStyle.css';
import { Link } from 'react-router-dom';
import Register from './Register';
import AuthenticationService from '../../services/AuthenticationService';



const layout = {
	labelCol: { span: 0 },
	wrapperCol: { span: 24 },
};

const tailLayout = {
	wrapperCol: { offset: 0, span: 24 },
};

const Login = (props) => {
	const [error,setError]=useState(null )
	const onFinish = async values => {
		const responsedata= await AuthenticationService.signin(values)
     if(responsedata.error){
       console.log("Error alter need to thrown ")
       setError(responsedata.errr)
     }
	 if(responsedata.Accesstoken){
		localStorage.setItem("user",JSON.stringify(responsedata.user))
		localStorage.setItem("Accesstoken",JSON.stringify(responsedata.Accesstoken))
		localStorage.setItem("user_role",JSON.stringify(responsedata.user_role))
		setError(null)
		props.setIsLoggedin(true);
	   }
    
	};
	const [isregister,setIsregister]=useState(false)
	const getComponent=()=>{
		return isregister?<Register setIsLoggedin={props.setIsLoggedin}/>:<div className="login-page" >
		<Form
			{...layout}
			name="basic"
			onFinish={onFinish}
			validateTrigger="onSubmit"
		>
			<h2>Login in to your account</h2>

			<Form.Item
				name="user_id"
				rules={[{ required: true, message: 'Please input your UserId!' }]}
			>
				<Input placeholder="User Id" />
			</Form.Item>

			<Form.Item
				name="password"
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password placeholder="Password" />
			</Form.Item>

			<div className="forgot-password-link">
				<Link to="/forgot-password">Forgot Password?</Link>
			</div>

			<Form.Item {...tailLayout}>
				<Button type="primary" htmlType="submit" className="form-submit-button">
					Login
				</Button>
				<Button type="primary" className="form-submit-button" onClick={()=>{setIsregister(true)}} >
					Register
				</Button>
			</Form.Item>
			<Form.Item {...tailLayout}>
				
			</Form.Item>
		</Form>
	</div>
	}
	return (
		<>
		{getComponent()}
		</>
		
	);
}

export default Login;