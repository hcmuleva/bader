import React, { useState } from 'react';
import { Space, Button, Form, Input, Select, Divider, DatePicker, TextArea } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import AuthenticationService from '../../../../../services/AuthenticationService';
const { Option } = Select;
const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};

const tailLayout = {
  wrapperCol: { offset: 0, span: 24 },
};

export function StudentDetail(props) {
  const [form] = Form.useForm();
  console.log("Recieved props", props)

  const update_student_profile = (requestdata )=>{
    const responsedata = AuthenticationService.updateUser(requestdata)
      form.resetFields();
      if (responsedata.error) {
        return <div>Error{responsedata.error}</div>
      }
  }
  const onFinish = (values) => {
    const myuserobject = JSON.parse(localStorage.getItem('user')).user
    console.log("MUUSEROBJECT",myuserobject)
    let mystudentdata =[]

    if(myuserobject&&myuserobject.student){
      if (values && values.fields) {
        mystudentdata= [...values.fields,...myuserobject.student];
        const requestdata = { "student":mystudentdata }
        update_student_profile(requestdata)
      }
    } else {
      mystudentdata=[...values.fields]
      const requestdata = { "student":mystudentdata }
      update_student_profile(requestdata)
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
                    <Divider>स्टूडेंट की जानकारी- {index + 1}</Divider>
                    <Form.Item
                      label="class"
                      name={[index, "class"]}
                    >
                       <Input/>
                    </Form.Item>
                    <Form.Item
                      label="Subject/branch"
                      name={[index, "branch"]}
                    >
                       <Input/>
                    </Form.Item>
                    <Form.Item
                      label="Category"
                      name={[index, "category"]}
                    >
                       <Input/>
                    </Form.Item>

                    <Form.Item
                      label="Specialization"
                      name={[index, "specialization"]}
                    >
                      <Input/>
                    </Form.Item>
                    
                    <Form.Item
                      label="Institute का नाम"
                      name={[index, "institute"]}
                    >
                    <Input/>
                    </Form.Item>
                    <Form.Item
                      label="टाइप"
                      name={[index, "type"]}
                    >
                       <Select>
                        <Select.Option value="regular">फुल टाइम</Select.Option>
                        <Select.Option value="parttime">पार्ट टाइम</Select.Option>
                        <Select.Option value="competition">कॉम्पिटिशनकी तैयारी</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="मीडियम"
                      name={[index, "medium"]}
                    >
                       <Select>
                        <Select.Option value="hindi">हिंदी</Select.Option>
                        <Select.Option value="english">English</Select.Option>
                        <Select.Option value="other">अन्य</Select.Option>
                      </Select>
                    </Form.Item>
                  
                    <Form.Item
                      label="सालाना फीस"
                      name={[index, "annual_fee"]}
                    >
                      <Input/>
                    </Form.Item>                 

                    <Form.Item
                      label="लोकेशन"
                      name={[index, "location"]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="पिनकोड"
                      name={[index, "pincode"]}
                    >
                      <Input/>
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
