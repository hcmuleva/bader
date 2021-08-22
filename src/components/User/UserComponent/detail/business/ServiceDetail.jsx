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

export function ServiceDetail(props) {
  const [form] = Form.useForm();
  console.log("Recieved props", props)

  const update_service_profile = (requestdata )=>{
    const responsedata = AuthenticationService.updateUser(requestdata)
      form.resetFields();
      if (responsedata.error) {
        return <div>Error{responsedata.error}</div>
      }
  }
  const onFinish = (values) => {
    const myuserobject = JSON.parse(localStorage.getItem('user')).user
    console.log("MUUSEROBJECT",myuserobject)
    let myservicedata =[]

    if(myuserobject&&myuserobject.service){
      if (values && values.fields) {
        myservicedata= [...values.fields,...myuserobject.service];
        const requestdata = { "service":myservicedata }
        update_service_profile(requestdata)
      }
    } else {
      myservicedata=[...values.fields]
      const requestdata = { "service":myservicedata }
      update_service_profile(requestdata)
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
                    <Divider>सर्विस की जानकारी- {index + 1}</Divider>

                    <Form.Item
                      label="सर्विस टाइप"
                      name={[index, "service_type"]}
                    >
                       <Select>
                        <Select.Option value="private">प्राइवेट</Select.Option>
                        <Select.Option value="govt">सरकारी</Select.Option>
                        <Select.Option value="semi-govt">अर्धसरकारी</Select.Option>
                
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="आप का पद"
                      name={[index, "post"]}
                    >
                       <Input/>
                    </Form.Item>
                   

                    <Form.Item
                      label="इंडस्ट्री का नाम"
                      name={[index, "service_name"]}
                    >
                    <Input/>
                    </Form.Item>
                    <Form.Item
                      label="इंडस्ट्री टाइप"
                      name={[index, "service_type"]}
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
                      label="कब से"
                      name={[index, "from"]}
                    >
                      <DatePicker picker="year" />
                    </Form.Item>
                    <Form.Item
                      label="कब तक"
                      name={[index, "to"]}
                    >
                      <DatePicker picker="year" />
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
