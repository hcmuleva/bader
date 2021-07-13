import { Button, Form, Input } from 'antd';
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

const Register = (props) => {
  let history = useHistory();
	const onFinish = values => {
		console.log("Values ",values)

		axios.defaults.crossDomain = true;
		axios.post('http://127.0.0.1:5000/api/user/register', { user_id: values.userId, password: values.password ,mobile:values.mobile,headers: {
		  'Access-Control-Allow-Origin': '*',
		},}).then(loginResponse => {
			
			
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
					  localStorage.setItem('selectedRole', user_role[0].role)
						console.log("Final value")
						history.push("/home")
				  }
	  }).catch(error => {
		console.log("Error",error)
		
	  });

	};

	return (
		<div className="login-page" style={{ backgroundImage: `url(${illustration})` }}>
      	{localStorage.getItem('token')?<Homepage/>
		
		:
			<Form
				{...layout}
				name="basic"
				onFinish={onFinish}
				validateTrigger="onSubmit"
			>
				<h2>Register account</h2>

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
        <Form.Item
					name="mobile"
					rules={[{ required: true, message: 'Please input confirm password!' }]}
				>
					<Input placeholder="Mobile Number" />
				</Form.Item>
				<div className="register-user-link ">
					<Link to="/login">Login</Link>
				</div >
				<div className="forgot-password-link">
					<Link to="/forgot-password">Forgot Password?</Link>
				</div>
		
				<Form.Item {...tailLayout}>
					<Button type="primary" htmlType="submit" className="form-submit-button">
						Register
					</Button>
				</Form.Item>
			</Form>
}
		</div>
	);
}

export default Register;