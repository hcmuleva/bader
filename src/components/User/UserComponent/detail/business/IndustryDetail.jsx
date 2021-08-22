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

export function IndustryDetail(props) {
  const [form] = Form.useForm();
  console.log("Recieved props", props)

  const update_industry_profile = (requestdata )=>{
    const responsedata = AuthenticationService.updateUser(requestdata)
      form.resetFields();
      if (responsedata.error) {
        return <div>Error{responsedata.error}</div>
      }
  }
  const onFinish = (values) => {
    const myuserobject = JSON.parse(localStorage.getItem('user')).user
    console.log("MUUSEROBJECT",myuserobject)
    let myindustrydata =[]

    if(myuserobject&&myuserobject.industry){
      if (values && values.fields) {
        myindustrydata= [...values.fields,...myuserobject.industry];
        const requestdata = { "industry":myindustrydata }
        update_industry_profile(requestdata)
      }
    } else {
      myindustrydata=[...values.fields]
      const requestdata = { "industry":myindustrydata }
      update_industry_profile(requestdata)
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
                    <Divider>इंडस्ट्री की जानकारी- {index + 1}</Divider>
                    <Form.Item
                      label="इंडस्ट्री का नाम"
                      name={[index, "industry_name"]}
                    >
                    <Input/>
                    </Form.Item>
                    <Form.Item
                      label="इंडस्ट्री टाइप"
                      name={[index, "industry_type"]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="वर्कर्स की संख्या"
                      name={[index, "works_count"]}
                    >
                      <Input />
                    </Form.Item>
                   
                    
                    <Form.Item
                      label="आप का पद"
                      name={[index, "post"]}
                    >
                       <Select>
                        <Select.Option value="owner">मालिक</Select.Option>
                        <Select.Option value="business_partner">पार्टनर</Select.Option>
                        <Select.Option value="labour">कर्मचारी</Select.Option>
                        <Select.Option value="manager">मैनेजर</Select.Option>
                        <Select.Option value="other">अन्य</Select.Option>
                      </Select>
                    </Form.Item>
                   
                   
                    <Form.Item
                      label="सँभालने का तरीका"
                      name={[index, "management_type"]}
                    >
                       <Select>
                        <Select.Option value="self">स्वयं</Select.Option>
                        <Select.Option value="part_time">पार्ट टाइम</Select.Option>
                        <Select.Option value="full_time">फुल टाइम</Select.Option>
                        <Select.Option value="contract">कॉन्ट्रैक्ट</Select.Option>
                        <Select.Option value="other">अन्य</Select.Option>
                      </Select>
                    </Form.Item>
                    
                    <Form.Item
                      label="सालाना आमदनी"
                      name={[index, "annual_income"]}
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
