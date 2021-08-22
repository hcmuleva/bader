import React, {  useState } from 'react';

import { Button, Form, Input } from 'antd';

import './../../assets/css/loginStyle.css';
import { Link, useHistory } from 'react-router-dom';


const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};

const tailLayout = {
  wrapperCol: { offset: 0, span: 24 },
};

const ForgotPassword = (props) => {
  const history = useHistory();
  const token = history.location.search.includes('?token=') ? history.location.search.replace('?token=', '') : false;

  const [linkText, setLinkText] = useState(undefined);


  const onFinish = values => {
   console.log("ONFInish for forgot password called with values",values)
  };

  const onFinishResetPassword = values => {
    console.log("Reset Password")
  }

  return (
    <div className="login-page" >
      {token ?
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinishResetPassword}
        >
          {!linkText ?
            <React.Fragment>
              <h2>Hi User, Reset password here.</h2>

              <Form.Item
                name="user_password"
                rules={[{ required: true, message: 'Please input new password' }]}
              >
                <Input.Password placeholder="New Password" />
              </Form.Item>

              <Form.Item
                name="confirm_user_password"
                dependencies={['user_password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('user_password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('New password does not match with confirm password!');
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>

              <div className="forgot-password-link">
                <Link to="/">To Login</Link>
              </div>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" className="form-submit-button">
                  Submit
                </Button>
              </Form.Item>
            </React.Fragment>
            :
            <React.Fragment>
              <h2>{linkText}</h2>
              <div className="forgot-password-link extra">
                <Link to="/">To Login</Link>
              </div>
            </React.Fragment>
          }
        </Form>
        :
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          {!linkText ?
            <React.Fragment>
              <h2>Hi User, Reset password here.</h2>

              <Form.Item
                name="user_email"
                rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter valid email!' }]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <div className="forgot-password-link">
                <Link to="/">Already Registered?</Link>
              </div>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" className="form-submit-button">
                  Submit
                </Button>
              </Form.Item>
            </React.Fragment>
            :
            <React.Fragment>
              <h2>{linkText}</h2>
              <div className="forgot-password-link extra">
                <Link to="/">Already Registered?</Link>
              </div>
            </React.Fragment>
          }
        </Form>
      }
    </div>
  );
}

export default ForgotPassword;