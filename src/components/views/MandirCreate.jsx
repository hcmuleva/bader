
import { Button, Card, DatePicker, Form, Input, Modal, Select, Tabs } from "antd";
import { css } from "aphrodite";
import axios from 'axios';
import React, { useEffect, useState ,useRef} from 'react';
import { Column, Row } from "simple-flexbox";
import EXTERNAL_API from '../shared/externalapi';
import { uploadS3File } from '../shared/s3/upload';
import { commonStyles } from "../../styles/common";
import { uuid } from 'uuidv4';
export function Mandircreate(props) {
  const { Option } = Select;
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 14
  }
};
const [form] = Form.useForm();
  const [address, setAddress] = useState({})
  const [pincodeData, setPincodeData] = useState([])
  const [localityname, setLocalityname] = useState('');
  const [officename, setOfficename] = useState('');
  const [subdistname, setSubdistname] = useState('');
  const [districtname, setDistrictname] = useState('');

  const [statename, setStatename] = useState('');
  const [pincode, setPincode] = useState('');
  const [mandirImage, setMandirImage] = useState('');
  const [mandirImageName, setMandirImageName] = useState('')
  const pincoderef=useRef({})
  const pincoderefList=useRef([])
  const getBaderArea =  () => {
    let mylist=[]


      return pincodeData.map((pincodeElem) => {
        console.log("PINCODE ELM ",pincodeElem)
        return (<Option value={pincodeElem.localityname} key={pincodeElem.id}>
          {pincodeElem.localityname}
        </Option>)
      }
      );
    
    
  };
  const handleChange = async (e) => {
    const pincodeval = e.target.value
    if (pincodeval.length == 6) {
      console.log("Length is 6 now")
      const url = EXTERNAL_API.PINCODE_URL + pincodeval
      console.log("URL ", url)
      axios.defaults.crossDomain = true;
      const postalcodelist=await axios.get(url)
      if(postalcodelist&&postalcodelist.data&&postalcodelist.data.data){
            console.log("RESPONSE ",postalcodelist)
            pincoderef.current=postalcodelist.data.data[0]
            pincoderefList.current=postalcodelist.data.data
            setPincodeData(postalcodelist)
            localStorage.setItem("addresslist", JSON.stringify(postalcodelist.data.data))
            localStorage.setItem("baderData", JSON.stringify(postalcodelist.data.data[0]))
  
          }
      // then(pincodeResponse => {
      //   console.log("RESPONSE for PINCODE ", pincodeResponse)
      //   if(pincodeResponse&&pincodeResponse.data&&pincodeResponse.data.data){
      //     pincoderef.current=pincodeResponse.data.data[0]
      //     pincoderefList.current=pincodeResponse.data.data
      //     localStorage.setItem("addresslist", JSON.stringify(pincodeResponse.data.data))
      //     localStorage.setItem("baderData", JSON.stringify(pincodeResponse.data.data[0]))

      //   }
      // }).catch(error => {
      //   console.log("Error ", error)
      // })
    }
  }
  const handleOk = (values) => {
    console.log("Values",values)
    // form.validateFields().then(values => {
    //   console.log("Pincode data ", pincodeData[0])
    //   const headers = {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   };

    //   address['baderArea'] = values.baderArea
    //   let jsonStr=localStorage.getItem("baderData")
    //   let my_address = JSON.parse(jsonStr);
      
    //   delete my_address['id']
    //   delete my_address['officename']
    //   console.log("MY ADDRESS ",my_address)
    //   let mandireDataVal={ ...my_address,"uid":uuid(), "mandirName": values.BaderName,name:values.BaderArea+"Bader", baderArea: values.baderArea
     
    // }
   
    //     console.log("Mandir Data", mandireDataVal)
    //   const my_post_body={
    //     bader_data: mandireDataVal,
    //     relation: "BADER_ADDRESS"
    //   }
    //   axios.post(
    //     'http://localhost:5000/bader/create',
    //     my_post_body,
    //     { headers }
    //   ).then(response => {
    //     console.log("Success ========>", response);
    //   })
    //     .catch(error => {
    //       console.log("Error ========>", error);
    //     })
    // });
    
  };
  const isEdit=true;
  return (
    <>
      <Row alignItems="center" justifyContent="space-between">
        <Form
          {...layout}
          name="basic"
          form={form}
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
                <Input />
              </Form.Item>

              <Form.Item
                label="BaderArea"
                name="BaderArea"
              >
                <Select
                  mode="tags"
                  placeholder="Select Bader Area"
                >
                  { getBaderArea()}
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
                {mandirImage ? "" : <Button >Upload Mataji Mandir photo</Button>}
                {mandirImage ? <Button >Mataji Ka Mandir</Button> : <input
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
                <Input  />
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

        </Form>
      </Row>
    </>
  )
}
