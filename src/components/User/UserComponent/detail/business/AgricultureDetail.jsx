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

export function AgricultureDetail(props) {
  const [form] = Form.useForm();
  console.log("Recieved props", props)

  const update_agriculture_profile = (requestdata )=>{
    const responsedata = AuthenticationService.updateUser(requestdata)
      form.resetFields();
      if (responsedata.error) {
        return <div>Error{responsedata.error}</div>
      }
  }
  const onFinish = (values) => {
    const myuserobject = JSON.parse(localStorage.getItem('user')).user
    console.log("MUUSEROBJECT",myuserobject)
    let myagriculturedata =[]

    if(myuserobject&&myuserobject.agriculture){
      if (values && values.fields) {
        myagriculturedata= [...values.fields,...myuserobject.agriculture];
        const requestdata = { "agriculture":myagriculturedata }
        update_agriculture_profile(requestdata)
      }
    } else {
      myagriculturedata=[...values.fields]
      const requestdata = { "agriculture":myagriculturedata }
      update_agriculture_profile(requestdata)
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
                    <Divider>खेती की जानकारी- {index + 1}</Divider>
                    <Form.Item
                      label="जमीन का नाम"
                      name={[index, "land_name"]}
                    >
                    <Input/>
                    </Form.Item>
                    <Form.Item
                      label="जमीन का रकबा(एकड में)"
                      name={[index, "land_size"]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="जमीन टाइप"
                      name={[index, "land_type"]}
                    >
                       <Select>
                        <Select.Option value="high_fertile">उपजाऊ</Select.Option>
                        <Select.Option value="fertile">कम उपजाऊ</Select.Option>
                        <Select.Option value="not_fertile">उपजाऊ नहीं</Select.Option>
                        <Select.Option value="not_in_use">पडत जमीन</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="सिचाई"
                      name={[index, "irrigation_type"]}
                    >
                       <Select>
                        <Select.Option value="well">कुवा</Select.Option>
                        <Select.Option value="river">नदी</Select.Option>
                        <Select.Option value="pond">तालाब</Select.Option>
                        <Select.Option value="canal">नहर</Select.Option>
                        <Select.Option value="other">अन्य</Select.Option>
                        
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="सिचाई का तरीका"
                      name={[index, "irrigation_mechanism"]}
                    >
                       <Select>
                        <Select.Option value="drip">ड्रिप</Select.Option>
                        <Select.Option value="direct">डायरेक्ट</Select.Option>
                        <Select.Option value="other">अन्य</Select.Option>
                        
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="सँभालने का तरीका"
                      name={[index, "management_type"]}
                    >
                       <Select>
                        <Select.Option value="self">स्वयं</Select.Option>
                        <Select.Option value="sazedar">साझेदार</Select.Option>
                        <Select.Option value="leased">मेहनताने</Select.Option>
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
                      <Input/>
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
