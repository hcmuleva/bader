import React, { useState, useEffect } from 'react'
import { getBusinessType, businessName } from '../../utils/Business'
import { Form, Input, Button, Space, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { ShopDetail } from './detail/business/ShopDetail';
import { AgricultureDetail } from './detail/business/AgricultureDetail'
import { IndustryDetail } from './detail/business/IndustryDetail';
import { ServiceDetail } from './detail/business/ServiceDetail';
import { ShowRoomDetail } from './detail/business/ShowRoomDetail';
import { StudentDetail } from './detail/business/StudentDetails';
import { TeacherDetail } from './detail/business/TeacherDetail';
const { Option } = Select;


const areas = [

  { "label": "दुकान", "value": "SHOP" },
  { "label": "शोरूम", "value": "SHOWROOM" },
  { "label": "खेती", "value": "AGRICULTURE" },
  { "label": "इंडस्ट्री", "value": "INDUSTRY" },
  { "label": "सर्विस", "value": "SERVICE" },
  { "label": "स्टूडेंट", "value": "STUDENT" },
  { "label": "टीचर", "value": "TEACHER" }
]


const sights = {
  SHOP: ["KIRANA", "JEWELLERY", "HARDWARE", "MEDICAL", "FURNITURE", "OTHER"],
  SHOWROOM: ["VEHICAL", "HOMEDECORATION", "ELECTRONICS", "MACHINARY", "CLOTH", "OTHER"],
  AGRICULTURE: ["HORTICULTURE", "CASHCROP", "AQAPHONICS", "HYDROPHONICS", "GARDEN", "OTHER"]
};

export function Business(props) {
  const [componentName, setComponentName] = useState('SHOP')
  console.log("Business bame ", businessName)
  console.log("Business getBusinessType ", getBusinessType(businessName[0].value))

  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  const handleChange = () => {
    console.log("SElected value ")
    // form.setFieldsValue({ sights: [] });
  };
  function getComponent() {
    switch (componentName) {
      case "SHOP":
        return <ShopDetail />
      case "AGRICULTURE":
        return <AgricultureDetail />
      case "INDUSTRY":
        return <IndustryDetail />
      case "SERVICE":
        return <ServiceDetail />
      case "SHOWROOM":
        return <ShowRoomDetail />
      case "STUDENT":
        return <StudentDetail />
      case "TEACHER":
      return <TeacherDetail />

    }
  }
  // useEffect(
  //   ()=>{
  //     getComponent()
  //   },[componentName]
  // )
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return (
    <div>
      <Form  {...layout} form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
        <Form.Item name="area" label="व्यवसाय का प्रकार" rules={[{ required: true, message: 'Missing area' }]}>
          <Select options={areas} onChange={(event) => {
            setComponentName(event)

          }} />
        </Form.Item>
      </Form>
      {getComponent()}
    </div>

  )
}
