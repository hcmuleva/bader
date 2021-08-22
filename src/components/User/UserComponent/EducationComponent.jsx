import React, { useState } from 'react';
import { Space, Button, Form, Input, Select, Divider, DatePicker, TextArea } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import DynamicField from './Dynamics/DynamicField';
import AuthenticationService from '../../../services/AuthenticationService';
const { Option } = Select;
const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};

const tailLayout = {
  wrapperCol: { offset: 0, span: 24 },
};

export function EducationComponent(props) {
  const { TextArea } = Input;
  const children = []
  const [form] = Form.useForm();
  console.log("Recieved props", props)

  const update_education_profile = (requestdata )=>{
    const responsedata = AuthenticationService.updateUser(requestdata)
      form.resetFields();
      if (responsedata.error) {
        return <div>Error{responsedata.error}</div>
      }
  }
  const onFinish = (values) => {
    const myuserobject = JSON.parse(localStorage.getItem('user')).user
    console.log("MUUSEROBJECT",myuserobject)
    let myeducationdata =[]
    if(myuserobject&&myuserobject.education){
      if (values && values.fields) {
        myeducationdata= [...values.fields,...myuserobject.education];
        const requestdata = { "education":myeducationdata }
        update_education_profile(requestdata)
      }
    } else {
      myeducationdata=[...values.fields]
      const requestdata = { "education":myeducationdata }
      update_education_profile(requestdata)
    }

  }
  return (
    <>

      <Form
        {...layout}
        form={form}
        name="basic"
        onFinish={onFinish}
        validateTrigger="onSubmit"
      >

        <Form.List name="fields">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <div key={field.key}>
                    <Divider>Education Detail- {index + 1}</Divider>
                    <Form.Item
                      label="Type"
                      name={[index, "type"]}
                      rules={[{ required: true }]}
                    >
                      <Select>
                        <Select.Option value="uneducated">UnEducated</Select.Option>
                        <Select.Option value="primaryshcool">Primary</Select.Option>
                        <Select.Option value="middleshcool">MiddleSchool</Select.Option>
                        <Select.Option value="highershcool">HighSchool</Select.Option>
                        <Select.Option value="highersecondary">HigherSecondary</Select.Option>
                        <Select.Option value="diploma">Diploma</Select.Option>
                        <Select.Option value="ug">UnderGraduate</Select.Option>
                        <Select.Option value="pg">PostGraduate</Select.Option>
                        <Select.Option value="phd">pHD</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="MajorSubject"
                      name={[index, "major_subject"]}

                    >
                      <Select mode="tags" style={{ width: '100%' }} tokenSeparators={[',']}>
                        {children}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Passing Year"
                      name={[index, "passing_year"]}
                    >
                      <DatePicker picker="year" />
                    </Form.Item>
                    <Form.Item
                      label="Achievements"
                      name={[index, "achievements"]}

                    >
                      <TextArea rows={2} />
                    </Form.Item>
                    <Form.Item
                      label="School/Univercity Name"
                      name={[index, "institute_name"]}

                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="School/Univercity Pincode"
                      name={[index, "institute_pincode"]}

                    >
                      <Input />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <Button
                        type="danger"
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                        icon={<MinusCircleOutlined />}
                      >
                        Remove Above Field
                      </Button>
                    ) : null}
                  </div>
                ))}
                <Divider />
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{ width: "60%" }}
                  >
                    <PlusOutlined /> फील्ड ऐड करे
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>
        <Space align="baseline">
          <Button type="primary" htmlType="submit" className="form-submit-button">
            Done
          </Button>
          <Button type="primary" onClick={() => {
            props.setIsDisplay(true)
          }}>Cancel</Button>
        </Space>
      </Form>


    </>
  )
}
