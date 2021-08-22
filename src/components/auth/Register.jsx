import React,{useState} from 'react'
import {Alert,Tabs, Progress,Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import AuthenticationService from '../../services/AuthenticationService';
const { Option } = Select;
const { TabPane } = Tabs;


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default function Register(props) {
  const [form] = Form.useForm();
  const [error,setError]=useState(null )
  const onFinish =  async (values) => {
    console.log('Received values of form: ', values);
   
     const responsedata= await AuthenticationService.register(values)
     console.log("responsedata",responsedata)
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

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="44">+44</Option>
        <Option value="971">+971</Option>
        <Option value="33">+33</Option>
      </Select>
    </Form.Item>
  );

    return (
      <div className="register-page" >
        {error?<Alert
       message={error}
       banner
       closable
     />:""}
      <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '91',
      }}
      scrollToFirstError
    >
     <h2>Please register</h2>
      <Form.Item
        name="user_id"
        label="User Id"
        tooltip="you can use your email id also as user_id?"
        rules={[{ required: true, message: 'Please input your user id!', whitespace: false }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="first_name"
        label="First Name"
        rules={[
          
          {
            required: true,
            message: 'Please input your First Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="last_name"
        label="Last Name"
        rules={[
          
          {
            required: false,
            message: 'Please input your Last Name !',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="ConfirmPassword"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[{ required: false, message: 'Please input your nickname!', whitespace: true }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>


      <Form.Item
        name="gender"
        label="Gender"
        
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>


      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
     
    </Form>
    </div>
    );
}
