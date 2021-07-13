import { Button, Form, Input } from 'antd';
//import { LOGIN_USER } from '../../graphql/login/mutation/userLogin';
//import { useMutation } from '@apollo/react-hooks';
//import { client } from './client';
import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Homepage } from '../HomePage';
import './../../assets/css/loginStyle.css';
import illustration from './../../assets/image/illustration.PNG';



const layout = {
	labelCol: { span: 0 },
	wrapperCol: { span: 24 },
};

const tailLayout = {
	wrapperCol: { offset: 0, span: 24 },
};

const Login = (props) => {

  let history = useHistory();
	const onFinish = values => {
		console.log("Values ",values)

		axios.defaults.crossDomain = true;
		axios.post('http://127.0.0.1:5000/api/user/login', { user_id: values.userId, password: values.password ,headers: {
		  'Access-Control-Allow-Origin': '*',
		},}).then(loginResponse => {
			
				console.log("login response ",loginResponse)
				  if (
					  loginResponse &&
					  loginResponse.data &&
					  loginResponse.data.token
				  ) {

						const {token , user,user_role}=loginResponse.data
						console.log("token",token, " user " , user)
						localStorage.setItem('user', user);
					  localStorage.setItem('token', token);
						localStorage.setItem('user_role', user_role);
						
					  localStorage.setItem('selectedRole', "Admin")
						console.log("Final value")
						props.setIsLoggedin(true);
						
				  }
	  }).catch(error => {
		console.log("Error",error)
		
	  });
/* 		userLogin({ variables: values })
			.then((loginResponse) => {
				console.log('hcm loginResponse', loginResponse, '\n Login token', loginResponse.data.loginUserToken);

				if (
					loginResponse &&
					loginResponse.data &&
					loginResponse.data.loginUserToken &&
					loginResponse.data.loginUserToken.login_token
				) {
					const { login_token, ...userProfileData } = loginResponse.data.loginUserToken;
					localStorage.setItem('token', loginResponse.data.loginUserToken.login_token);
					localStorage.setItem('userProfile', JSON.stringify(userProfileData));
					if (!localStorage.getItem('selectedRole')) {
						localStorage.setItem('selectedRole', userProfileData.Assigned_Role[0].user_role)
					}
					props.setIsLoggedin(true);
				}
			})
			.catch((error) => {
				console.log('\n Error in login ', error);
			}); */
	};

	return (
	
		<div className="login-page" style={{ backgroundImage: `url(${illustration})` }}>
		{localStorage.getItem('token')?<Homepage/>
		
		:	<Form
				{...layout}
				name="basic"
				onFinish={onFinish}
				validateTrigger="onSubmit"
			>
				<h2>Hi User, Login in to your account</h2>

				<Form.Item
					name="userId"
					rules={[{ required: true, message: 'Please input your UserId!' }]}
				>
					<Input placeholder="userId" />
				</Form.Item>

				<Form.Item
					name="password"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password placeholder="Password" />
				</Form.Item>
			
				<div className="register-user-link ">
					<Link to="/register">Register</Link>
				</div >
				<div className="forgot-password-link">
					<Link to="/forgot-password">Forgot Password?</Link>
				</div>
		
				<Form.Item {...tailLayout}>
					<Button type="primary" htmlType="submit" className="form-submit-button">
						Login
					</Button>
				</Form.Item>
			</Form>
		}
		</div>
	);
}

export default Login;