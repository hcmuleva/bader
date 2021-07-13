import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Form, Input, message, Select } from "antd";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Column, Row } from "simple-flexbox";
import EXTERNAL_API from '../shared/externalapi';
import { uploadS3File } from '../shared/s3/upload';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 14
  }
};


const MandirCreateForm = ({ isEdit, setLevel,setMandirdata }) => {
  const [form] = Form.useForm();
  const [address,setAddress]=useState({})
  const [pincodeData, setPincodeData] = useState([])
  const [localityname, setLocalityname] = useState('');
  const [officename, setOfficename] = useState('');
  const [subdistname, setSubdistname] = useState('');
  const [districtname, setDistrictname] = useState('');

  const [statename, setStatename] = useState('');
  const [pincode, setPincode] = useState('');
  const [mandirImage, setMandirImage] = useState('');
  const [mandirImageName,setMandirImageName]=useState('')
  const getBaderArea = () => {
    console.log("pincodeData=>", pincodeData)
    return pincodeData.map((pincodeElem) => (
      <Option value={pincodeElem.localityname} key={pincodeElem.id}>
        {pincodeElem.localityname}
      </Option>
    ));
  };

  useEffect(
    () => {
      console.log('hello::', pincodeData[0]);
      if (pincodeData.length > 0) {
        setOfficename(pincodeData[0].officename)
        setLocalityname(pincodeData[0].localityname)
        setDistrictname(pincodeData[0].districtname)
        setSubdistname(pincodeData[0].subdistname)
        setStatename(pincodeData[0].statename)
        setPincode(pincodeData[0].pincode)
        console.log("subdistname", subdistname)
        setAddress({
          "officename":officename,
          "localityname":localityname,
          "districtname":districtname,
          "subdistname":subdistname,
          "statename":statename,
          "pincode":pincode


        })
      }

    }, [pincodeData])
  const handleChange = (e) => {
    const pincodeval = e.target.value
    if (pincodeval.length == 6) {
      console.log("EXTERNAL_API ")
      const url = EXTERNAL_API.PINCODE_URL + pincodeval
      axios.defaults.crossDomain = true;
      axios.get(url).then(pincodeResponse => {
        setPincodeData(pincodeResponse.data.data)
        localStorage.setItem('mandiraddress',pincodeResponse.data.data[0])
        console.log("pincodeResponse ", pincodeResponse.data.data)
      }).catch(error => {
        console.log("Error ", error)
      })
    }
  }
  const [imageUrl, setImageUrl] = useState('')
  

  const onFinish = values => {
    console.log("Values ", values)
    
    form.validateFields().then(values => {
      console.log("All Value", values)
      let myvalue={"data":values,"address":localStorage.getItem('mandiraddress')}
      localStorage.setItem('mandirdata', myvalues)
   
  });
  console.log("RECIEVED following ", localStorage.getItem('mandirdata'))
    setMandirdata({...address,"url":mandirImage,"mandirImageName":mandirImageName,values})


}
  return (
    <Row alignItems="center" justifyContent="space-between">
      <Form
        {...layout}
        name="basic"
        form={form}
        
        validateTrigger="onSubmit"
        className="subject-details-form"
       
      >
        <Row style={{ width: '100%' }}>
          <Column flex="1">
            <Form.Item
              label="BaderName"
              name="BaderName"
             
              rules={[
                {
                  required: true,
                  message: "Please input Bader Name!"
                }
              ]}
            >
              <Input   onChange={(e)=>{
                console.log("Bader name ", e.target.value)
              }} />
            </Form.Item>

            <Form.Item
              label="Bader Area"
              name="Bader Area"
            >
              <Select
                mode="tags"
                placeholder="Select Bader Area"
              >
                {getBaderArea()}
              </Select>
            </Form.Item>

            <Form.Item
              label="District"
              name="District"
              value={districtname}

            >
              <Input disabled={true} placeholder={districtname} />
            </Form.Item>
            
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="" src={mandirImage} />}
            >
              {mandirImage?"":<Button >Upload Mataji Mandir photo</Button>}
              {mandirImage?<Button >Mataji Ka Mandir</Button>: <input
            type="file"
            name="profile-upload"

            accept="image/*"
            onChange={async (e) => {
              console.log("Event ", e)
              if (e.target.files.length > 0) {
                const file = e.target.files[0]
                const fileName = file.name

                const res = await uploadS3File(file, fileName, "seervi")
                setMandirImage(res)
                setMandirImageName(fileName)
                console.log("res ", res)
              }
             
            }}
          />}
            </Card>,
          </Column>
          <Column flex="1">
            <Form.Item
              label="PinCode"
              name="course_code"
              onChange={handleChange}
              rules={[
                {
                  required: true,
                  message: "Please Bader area pin code!"
                }
              ]}
            >
              <Input disabled={isEdit} />
            </Form.Item>
            <Form.Item
              label="Tehsil"
              name="subdistrict"
              value={subdistname}

            >
              <Input disabled={true} placeholder={subdistname} />
            </Form.Item>
            <Form.Item
              label="State"
              name="State"
              value={statename}

            >
              <Input disabled={true} placeholder={statename} />
            </Form.Item>
            <Form.Item
              label="PinCode"
              name="pincode"
              value={pincode}

            >
              <Input disabled={true} placeholder={pincode} />
            </Form.Item>
            <Form.Item
              label="Sthapana divas"
              name="Sthapanadivas"
            >
              <DatePicker disabled={isEdit} />
            </Form.Item>
          </Column>
        </Row>
        <Row alignItems="center" justifyContent="space-between">             
                <Button type="primary" onClick={
                  onFinish
                }>
          Next
        </Button></Row>
      </Form>
    </Row>
  )
}

export default MandirCreateForm;
