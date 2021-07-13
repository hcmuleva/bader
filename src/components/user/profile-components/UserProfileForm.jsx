import React, { useState, useEffect } from 'react'

import { Form, Input, Select, InputNumber, DatePicker, Row as AntRow, Col, Button } from 'antd';
import { Row } from 'simple-flexbox';

import { css } from 'aphrodite';
import { commonStyles } from '../../../styles/common';
import { userStyles } from '../style';
import { sex, grade_number, section } from '../../../assets/enums/common';
import moment from 'moment';

import openNotificationWithIcon from './../../shared/notification';
import messages from './../../../assets/enums/messages';

const layout = {
  labelCol: {
    span: 10
  },
  wrapperCol: {
    span: 14
  }
};

const { TextArea } = Input;

const PasswordField = ({ setShowConfirmField, ...props }) => {
  return (
    <Input.Password
      {...props}
      onChange={e => {
        props.onChange(e);
        setShowConfirmField(e.target.value !== '' ? true : false)
      }}
    />
  )
}

const UserProfileForm = ({ profileLoading, userDetail, updateMyProfile }) => {
  const [isDisable, setIsDisable] = useState(true);
  const [showConfirmField, setShowConfirmField] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (!profileLoading) {
      form.setFieldsValue({ ...userDetail, user_birthday: userDetail.user_birthday ? moment(userDetail.user_birthday) : null, user_new_password: '', user_confirm_password: '' });
    }
  }, [profileLoading, form, userDetail]);

  const handleSaveChange = () => {
    form.validateFields().then(formValues => {
      // @here "user_name" is not defined when logic is defined change this
      let newValues = {
        user_first_name: formValues.user_first_name,
        user_last_name: formValues.user_last_name,
        user_name: formValues.user_first_name,
        user_gender: formValues.user_gender,
        user_biography: formValues.user_biography,
        user_mobile: formValues.user_mobile.toString(),
        user_avatar: formValues.user_avatar,
        user_time_zone: formValues.user_time_zone,
        user_birthday: formValues.user_birthday,
        user_address: formValues.user_address,
        user_class_grade: formValues.user_class_grade,
        user_class_section: formValues.user_class_section,
      }
      if (formValues.user_new_password !== '') {
        newValues = {
          ...newValues,
          user_password: formValues.user_new_password
        }
      }
      updateMyProfile({
        variables: newValues
      }).then((res) => {
        const newUserDetail = res.data.updateMyProfile;
        form.setFieldsValue({ ...newUserDetail, user_birthday: newUserDetail.user_birthday ? moment(newUserDetail.user_birthday) : null, user_new_password: '', user_confirm_password: '' });
        setShowConfirmField(false);
        localStorage.setItem('userProfile', JSON.stringify(res.data.updateMyProfile));
        openNotificationWithIcon('success', messages.success.profile.update);
        setIsDisable(toggle => !toggle);
      });
    });
  };

  let confirmStyleProp = {};
  if (!showConfirmField) {
    confirmStyleProp = { display: 'none' }
  }

  const handleCancel = () => {
    setIsDisable(toggle => !toggle);
    form.setFieldsValue({ ...userDetail, user_birthday: userDetail.user_birthday ? moment(userDetail.user_birthday) : null, user_new_password: '', user_confirm_password: '' });
    setShowConfirmField(false);
  }

  return (
    <div>
      <div className="d-flex justify-content-end w-100">
        {!isDisable ? (
          <div>
            <Button type="primary" onClick={handleCancel} ghost>
              Cancel
            </Button>
            <Button className="user-profile__primary-button ml-3" type="primary" onClick={handleSaveChange}>
              Save
            </Button>
          </div>
        ) : (
            <Button
              className="user-profile__primary-button"
              type="primary"
              ghost
              onClick={() => setIsDisable(false)}
            >
              Edit
            </Button>
          )}
      </div>
      <Form
        {...layout}
        name="user-details-form"
        form={form}
        className="user-profile-page-form pt-3"
      >
        <Row className={css(commonStyles.pl25UserProfile, userStyles.formSectionTitle)}>
          Contact information
        </Row>
        <AntRow gutter={16}>
          <Col style={{ marginLeft: 25 }} span={10}>
            <Form.Item
              label="First Name"
              name="user_first_name"
              rules={[
                {
                  required: true,
                  message: 'Please input First Name!'
                }
              ]}
            >
              <Input style={{ width: '100%' }} disabled={isDisable} />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="user_last_name"
              rules={[
                {
                  required: true,
                  message: 'Please input Last Name!'
                }
              ]}
            >
              <Input style={{ width: '100%' }} disabled={isDisable} />
            </Form.Item>
            <Form.Item
              label="Gender"
              name="user_gender"
              rules={[
                {
                  required: false,
                  message: 'Please input Gender!'
                }
              ]}
            >
              <Select style={{ width: '100%' }} disabled={isDisable}>
                {sex.map((item) => (
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Email"
              name="user_email"
              rules={[
                {
                  type: 'email',
                  required: true,
                  message: 'Please input Email!'
                }
              ]}
            >
              <Input style={{ width: '100%' }} disabled={true} />
            </Form.Item>
            <Form.Item
              label="Mobile"
              name="user_mobile"
              rules={[
                {
                  required: false,
                  message: 'Please input Mobile!'
                }
              ]}
            >
              <InputNumber className="user-profile__mobile-number" style={{ width: '100%' }} disabled={isDisable} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label="Birthday"
              name="user_birthday"
              rules={[
                {
                  required: false,
                  message: 'Please input Birthday!'
                }
              ]}
            >
              <DatePicker style={{ width: '100%' }} disabled={isDisable} />
            </Form.Item>
            <Form.Item label="Grade" name="user_class_grade">
              <Select style={{ width: '100%' }} disabled={isDisable}>
                {grade_number.map((grade) => <Select.Option key={grade} value={grade}>{grade}</Select.Option>)}
              </Select>
            </Form.Item>
            <Form.Item label="Section" name="user_class_section">
              <Select style={{ width: '100%' }} disabled={isDisable}>
                {section.map((e) => <Select.Option key={e} value={e}>{e}</Select.Option>)}
              </Select>
            </Form.Item>
            <Form.Item label="Password" name="user_new_password">
              <PasswordField disabled={isDisable} setShowConfirmField={setShowConfirmField} autoComplete="new-password" />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="user_confirm_password"
              style={confirmStyleProp}
              rules={[
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    console.log('value', value)
                    console.log('getFieldValue', getFieldValue('user_new_password'))
                    if (getFieldValue('user_new_password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('New & Confirm password does not match!');
                  },
                })
              ]}
            >
              <Input.Password disabled={isDisable} autoComplete="new-confirm-password" />
            </Form.Item>
          </Col>
        </AntRow>
        <Row className={css(commonStyles.pl25UserProfile, userStyles.formSectionTitle)}> Address: </Row>
        <Row className={css(commonStyles.pl25UserProfile)}>
          <Form.Item
            className={css(userStyles.textarea)}
            wrapperCol={{ span: 24 }}
            name="user_address"
          >
            <TextArea disabled={isDisable} autoSize={{ minRows: 3, maxRows: 5 }} />
          </Form.Item>
        </Row>
        <Row className={css(commonStyles.pl25UserProfile, userStyles.formSectionTitle)}> Biography: </Row>
        <Row className={css(commonStyles.pl25UserProfile)}>
          <Form.Item
            className={css(userStyles.textarea)}
            wrapperCol={{ span: 24 }}
            name="user_biography"
          >
            <TextArea disabled={isDisable} autoSize={{ minRows: 3, maxRows: 5 }} />
          </Form.Item>
        </Row>
      </Form>
    </div>
  )
}

export default UserProfileForm;
