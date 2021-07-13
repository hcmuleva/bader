import { Button, Card, DatePicker, Form, Input, Modal, Select } from "antd";
import { css } from "aphrodite";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Column, Row } from "simple-flexbox";
import { Checkbox } from 'antd';
import { uuid } from 'uuidv4';
import { commonStyles } from "../../styles/common";
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

const MandirCreateDialog = ({ isEdit, visible, setVisible ,setReload}) => {

  const [form] = Form.useForm();
  const [mandirData,setMandirData]=useState({});
  const [area,setArea] = useState('')
  const [address, setAddress] = useState({})
  const [pincodeData, setPincodeData] = useState([])
  const [pincode, setPincode] = useState('');
  const [mandirImage, setMandirImage] = useState('');
  const [isHostel,setIsHostel] =useState(false);
  const [isTeam,setIsTeam] =useState(false);
  const getBaderArea = () => {
    return pincodeData.map((pincodeElem) => (
      <Option value={pincodeElem.localityname} key={pincodeElem.id}>
        {pincodeElem.localityname}
      </Option>
    ));
    return pincodeData[0]
  };

  useEffect(
    () => {
      if (pincodeData.length > 0) {
        setAddress({...pincodeData[0]})
       
      }

    }, [pincodeData])
  const handleChange = (e) => {
    console.log("HandleChange ",e.target.value)
    const pincodeval = e.target.value
    if (pincodeval.length == 6) {
      const url = EXTERNAL_API.PINCODE_URL + pincodeval
      axios.defaults.crossDomain = true;
      axios.get(url).then(pincodeResponse => {
        setPincodeData(pincodeResponse.data.data)
        setAddress(pincodeResponse.data.data[0])
        const mypostaladdress[localityname,...remainingAddress] =pincodeResponse.data.data[0] 
        localStorage.setItem("baderData", JSON.stringify(pincodeResponse.data.data[0]))
        console.log("pincodeResponse ", address)
        console.log("Address Value in geting pin ", pincodeResponse.data.data[0])
      }).catch(error => {
        console.log("Error ", error)
      })
    }
  }

  const [mandirdata, setMandirdata] = useState(null);
  const reloadMandirList=()=>{
    setReload(true)
  }
  const handleOk = () => {
     
    form.validateFields().then(values => {
      console.log("Pincode data ", pincodeData[0])
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      };

      address['baderArea'] = values.baderArea
      let jsonStr=localStorage.getItem("baderData")
      let my_address = JSON.parse(jsonStr);
      
      delete my_address['id']
      delete my_address['officename']
      
      console.log("MY ADDRESS ",my_address)
      console.log("Bader ARA from Values ",values)
      //my_address["localityname"]=values.BaderArea
      //my_address["hcm_data"]=values.BaderArea
      let mandireDataVal={ ...my_address,"uid":uuid(),"localityname": area,"mandirName": values.BaderName
     
    }
    //   let mandireDataVal = { "uid": uuid(), "mandirName": values.BaderName,name:values.BaderArea+"Bader",
    //   "name":values.BaderArea,
    //   "location": values.BaderArea, "subdistrict": values.subdistrict,
    //   "state": values.State, "pincode": values.pincode,
    //   "mandirImage": mandirImage, "District": values.districtname,
    // }
        console.log("Mandir Data", mandireDataVal)
      const my_post_body={
        bader_data: mandireDataVal,
        relation: "BADER_ADDRESS"
      }
      axios.post(
        'http://localhost:5000/vader/create',
         mandireDataVal,
        { headers }
      ).then(response => {
          
        console.log("Success ========>", response);
        //queryClient.invalidateQueries('vaderlist')
        
      })
        .catch(error => {
          console.log("Error ========>", error);
        })
    });
    setVisible(false)
  };


  const handleCancel = () => {
    setVisible(false);
  };


  return (
    <Modal
      destroyOnClose
      width={1000}
      title={
        <div className={css(commonStyles.title)}>
          Create Mandir
        </div>
      }
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Save"
      zIndex={1010}
    >
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
                label="BaderName"
                name="BaderName"
                rules={[
                  {
                    required: true,
                    message: "Please input Bader Name!"
                  }
                ]}
              >
                <Input disabled={isEdit} />
              </Form.Item>

              <Form.Item
                label="BaderArea"
                name="BaderArea"
                
              >
                <Select
                  mode="tags"
                  placeholder="Select Bader Area"
                  onChange={(value)=>{
                    console.log("Harish Selected ",value)
                    setArea(value[0])
                  }}
                >
                  {getBaderArea()}
                </Select>
              </Form.Item>   
              </Column>
              <Column flex="1">           
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="" src={mandirImage} />}
              >
                {mandirImage ? <Button >Mataji Ka Mandir</Button> : 
                <><Button >Mataji Ka Mandir</Button>
                <input
                  type="file"
                  name="profile-upload"
                  label="Upload Mataji image"
                  accept="image/*"
                  style={{opacity: 0}}
                 
                  onChange={async (e) => {
                    console.log("Event ", e)
                    if (e.target.files.length > 0) {
                      const file = e.target.files[0]
                      const fileName = file.name
                      const res = await uploadS3File(file, fileName, "seervi")
                      setMandirImage(res)
                      console.log("res ", res)
                    }

                  }}
                /> </>}
              </Card>,
          </Column>
            <Column flex="1">
            </Column>
          </Row>
          <Checkbox onChange={(e)=>{
              setIsHostel(e.target.checked)
              console.log("Selected valued ",e.target.checked)}}
              >रुकने की व्यवस्था है क्या? </Checkbox>
            <Row>
           
            {isHostel?
              <><Column flex="1">
            <Form.Item
                label="कितने सदस्यों के लिए"
                name="hostelmembers"
                onChange={handleChange}
              >
                <Input />
              </Form.Item>
              </Column>
              <Column flex="1">
              <Form.Item
                label="खाने की व्कितने सदस्यों की?"
                name="food"
                onChange={handleChange}                
              >
                <Input />
              </Form.Item>
              </Column></>
            :""}
            </Row>
            <Checkbox onChange={(e)=>{
              setIsTeam(e.target.checked)
              console.log("Selected valued ",e.target.checked)}}>IsKaryKarini</Checkbox>
            <Row>
              {isTeam?
               <><Column flex="1">
               <Form.Item
                   label="कितने सदस्यों के लिए"
                   name="hostelmembers"
                   onChange={handleChange}
                 >
                   <Input />
                 </Form.Item>
                 </Column>
                 <Column flex="1">
                 <Form.Item
                   label="खाने की व्कितने सदस्यों की?"
                   name="food"
                   onChange={handleChange}                
                 >
                   <Input />
                 </Form.Item>
                 </Column>
                 <Column flex="1">
                 <Form.Item
                   label="खाने की व्कितने सदस्यों की?"
                   name="food"
                   onChange={(e)=>{
                    console.log("This is for input change",e.target.value)
                   }}                
                 >
                   <Input />
                 </Form.Item>
                 </Column>
                 </>
                 
              :""}
            </Row>
        </Form>
      </Row>
      <div className="ant-modal-footer">
      
      </div>

    </Modal>
  );
}

export default MandirCreateDialog;