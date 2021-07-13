
import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, InputNumber, Modal, Button, Avatar, Typography } from 'antd';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import { FormInstance } from 'antd/lib/form';
export default function Demo(props) {
    
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
      
    const showUserModal = () => {
      setVisible(true);
    };
  
    const hideUserModal = () => {
      setVisible(false);
    };
  
    const onFinish = (values) => {
      console.log('Finish:', values);
    };
  
    
    return (
      <>
        <Form.Provider
          onFormFinish={(name, { values, forms }) => {
            if (name === 'userForm') {
              const { basicForm } = forms;
              const users = basicForm.getFieldValue('users') || [];
              basicForm.setFieldsValue({ users: [...users, values] });
              setVisible(false);
            }
          }}
        >
          <Form {...layout} name="basicForm" onFinish={onFinish}>
            <Form.Item name="group" label="Group Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="User List"
              shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
            >
              {({ getFieldValue }) => {
                const users = getFieldValue('users') || [];
                return users.length ? (
                  <ul>
                    {users.map((user, index) => (
                      <li key={index} className="user">
                        <Avatar icon={<UserOutlined />} />
                        {user.name} - {user.age}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Typography.Text className="ant-form-text" type="secondary">
                    ( <SmileOutlined /> No user yet. )
                  </Typography.Text>
                );
              }}
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
              <Button htmlType="button" style={{ margin: '0 8px' }} onClick={showUserModal}>
                Add User
              </Button>
            </Form.Item>
          </Form>
  
          <Modal visible={visible} onCancel={hideUserModal} />
        </Form.Provider>
      </>
    );
}
