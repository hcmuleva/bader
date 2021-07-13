import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { useMutation } from '@apollo/react-hooks';
// import { FORGOT_PASSWORD, RESET_PASSWORD } from '../../graphql/user/mutation/forgotPassword';
//import { client } from './client';
import './../../assets/css/loginStyle.css';
import illustration from './../../assets/image/illustration.PNG';




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

  // const [forgotUserPassword] = useMutation(FORGOT_PASSWORD);
  // const [resetUserPassword] = useMutation(RESET_PASSWORD);
  const [linkText, setLinkText] = useState(undefined);

  // useEffect(() => {
  //   client.resetStore();
  // }, [])

  const onFinish = values => {
    // forgotUserPassword({ variables: values })
    //   .then((forgotPasswordResponse) => {
    //     setLinkText(forgotPasswordResponse.data.forgotUserPassword.message);
    //   })
    //   .catch((error) => {
    //     console.log('\n Error in login ', error);
    //   });
  };

  const onFinishResetPassword = values => {
    // resetUserPassword({
    //   variables: {
    //     user_password: values.user_password,
    //   },
    //   context: {
    //     headers: {
    //       Authorization: token
    //     }
    //   }
    // })
    //   .then((resetPasswordResponse) => {
    //     setLinkText(`Hey ${resetPasswordResponse.data.resetUserPassword.user_first_name}, Your password has been reset successfully.`);
    //   })
    //   .catch((error) => {
    //     console.log('\n Error in login ', error);
    //   });
  }

  return (
    <div className="login-page" style={{ backgroundImage: `url(${illustration})` }}>
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