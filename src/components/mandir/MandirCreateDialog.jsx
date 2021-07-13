import { Button, Card, DatePicker, Form, Input, Modal, Select ,Avatar} from "antd";
import { css } from "aphrodite";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Column, Row } from "simple-flexbox";
import MUIDataTable from "mui-datatables";
import { UserOutlined } from '@ant-design/icons';

import { Checkbox } from 'antd';
import moment from 'moment';
import { uuid } from 'uuidv4';
import { commonStyles } from "../../styles/common";
import EXTERNAL_API from '../shared/externalapi';
import { uploadS3File } from '../shared/s3/upload';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 10
  },
  wrapperCol: {
    span: 12
  }
};

const MandirCreateDialog = ({ isEdit, visible, setVisible ,setReload}) => {
  const dateFormat = 'DD/MM/YYYY';

  const [form] = Form.useForm();
  const [pincodeData,setPincodeData]=useState([]);
  const [area,setArea]=useState('')
  const [memberData,setMemberData]=useState({name:"",pad:"",mobile:""})
  const [teamdata,setTeamdata]=useState([])
  const [mandirData,setMandirData]=useState({"mandirName":"","isHostel":false, "isTeam":false, 'mandirImage':''});
  //This is for getting village list for a given pincode
  const getBaderArea = () => {
    return pincodeData.map((pincodeElem) => (
      <Option value={pincodeElem.localityname} key={pincodeElem.id}>
        {pincodeElem.localityname}
      </Option>
    ));
  };
  
  useEffect(
    () => {
      console.log("pincodeData in useEffect",pincodeData)
      if (pincodeData.length > 0) {
        console.log("pincodeData Elm in useEffect",pincodeData[0])
        const {localityname,...myaddress} =pincodeData[0]
        setMandirData(myaddress)
      }

    }, [pincodeData])

    
  const handleChange = (e) => {
    console.log("HandleChange ",e.target.value)
    const pincodeval = e.target.value
    if (pincodeval.length == 6) {
      const url = EXTERNAL_API.PINCODE_URL + pincodeval
      axios.defaults.crossDomain = true;
      axios.get(url).then(pincodeResponse => {
        if( pincodeResponse&&pincodeResponse.data&&pincodeResponse.data.data){
          setPincodeData(pincodeResponse.data.data)
        }
        const {id,localityname,...remainingAddress} =pincodeResponse.data.data[0] 
        
        setMandirData({...mandirData,...remainingAddress})
      }).catch(error => {
        console.log("Error ", error)
      })
    }
  }

  const handleOk = () => {
    form.validateFields().then(values => {
      console.log("Pincode data ",mandirData)
      mandirData['karykarini']=teamdata
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      };
      axios.post(
        'http://localhost:5000/vader/create',
         mandirData,
        { headers }
      ).then(response => {   
        console.log("Success ========>", response);
        
      })
        .catch(error => {
          console.log("Error ========>", error);
        })
    });
    form.resetFields();
    setVisible(false)
  };


  const handleCancel = () => {
    form.resetFields();
    setVisible(false);
  };

 
  const teamcolumns = [
   
    { name: "name", label: "नाम" },
    { name: "pad", label: "पद" },
    { name: "mobile", label: "मोबाइल" }
    
]
  const teamoptions = {
    download: false,
    print: false,
    filter: false,
    selectableRows: false,
    responsive: "stacked"

}
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
                label="BaderArea"
                name="BaderArea"
                onChange={(e)=>{
                  console.log("localityname",e.target.value)
                  setMandirData({...mandirData,localityname:e.target.value})
                  console.log("Bader Area Name", e.target.value)
                }}
                value={area}
              >
                <Select
                  mode="tags"
                  placeholder="Select Bader Area"
                  onChange={(value)=>{
                    setMandirData({...mandirData,localityname:value[0]}) 
                    console.log("AREA  Selected  in Combobox",value)
                    setArea(value[0])
                  }}
                >
                  {getBaderArea()}
                </Select>
              </Form.Item>  
              <Form.Item
                label="BaderName"
                name="BaderName"
                value={mandirData.mandirName}
                onChange={(e)=>{
                  console.log(e.target)
                  setMandirData({...mandirData,mandirName:e.target.value})
                }}
                rules={[
                  {
                    required: true,
                    message: "Please input Bader Name!"
                  }
                ]}
                
              >
                <Input disabled={isEdit} />
              </Form.Item>

              
              </Column>
              <Column flex="1">           
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="" src={mandirData.photo} />}
              >
                {mandirData.photo ? <Button >Mataji Ka Mandir</Button> : 
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
                      setMandirData({...mandirData,photo:res})
                    }

                  }}
                /> </>}
              </Card>,
          </Column>
            <Column flex="1">
            </Column>
          </Row>
          <Checkbox onChange={(e)=>{
              setMandirData({...mandirData,isHostel:e.target.checked})
            }}
              >धर्मशाला की व्यवस्था है क्या? कितने व्यक्तियों के लिए</Checkbox>
            <Row alignItems="center" justifyContent="space-between">
           
            {mandirData.isHostel?
              <>
              <Column flex="1">
            <Form.Item
                label="रुकने के लिए"
                type="number"
                size="small"
                style={{ fontSize: 10 }}
                name="stay"
                onChange={(e)=>{
                  setMandirData({...mandirData,stay:e.target.value})
                }}
              >
                <Input />
              </Form.Item>
              </Column>
              <Column flex="1">
            <Form.Item
                label="नास्ता के लिए"
                type="number"
                size="small"
                style={{ fontSize: 10 }}
                name="breakfastfor"
                onChange={(e)=>{
                  setMandirData({...mandirData,breakfastfor:e.target.value})
                }}
              >
                <Input />
              </Form.Item>
              </Column>
              <Column flex="1">
              <Form.Item
                label="भोजन के लिए"
                size="small"
                style={{ fontSize: 10 }}
                name="food"
                onChange={(e)=>{
                  setMandirData({...mandirData,foodForMembers:e.target.value})
                }}              
              >
                <Input />
              </Form.Item>
              </Column></>
            :""}
            </Row>
            <Checkbox onChange={(e)=>{
              setMandirData({...mandirData,isTeam:e.target.checked})
              console.log("Selected valued ",e.target.checked)}}>IsKaryKarini</Checkbox>
            <Row >
              {mandirData.isTeam?
               <>
               <Card alignItems="center" justifyContent="space-between">
               <Column flex="1">
               <Form.Item
                   label="नाम"
                   name="teammembers"
                   onChange={(e)=>{
                    setMemberData({...memberData,"name":e.target.value})
                   }}
                 >
                   <Input />
                 </Form.Item>
                 </Column>
                 <Column flex="1">
                 <Form.Item
                   label="पद"
                   name="pad"
                   onChange={(e)=>{
                    setMemberData({...memberData,"pad":e.target.value})
                   }}            
                 >
                     <Select defaultValue="President" style={{ width: 120 }} onChange={(value)=>{
                       console.log("SELECTED VALUE ",value)
                        setMemberData({...memberData,"pad":value})
                     }}>
      <Option value="president">अध्यक्ष</Option>
      <Option value="vicepresident">उपाध्यक्ष</Option>
      <Option value="secretary">सचिव</Option>
      <Option value="treasurer">कोषाध्यक्ष</Option>
      <Option value="trusty">ट्रस्टी</Option>
      <Option value="pujari">पुजारी</Option>
    </Select>
                 </Form.Item>
                 </Column>
                 <Column flex="1">
                 <Form.Item
                   label="मोबाइल"
                   name="mobile"
                   value={memberData.mobile}
                   onChange={(e)=>{
                    setMemberData({...memberData,"mobile":e.target.value})
                   }}              
                 >
                   <Input placeholder={memberData.mobile} />
                 </Form.Item> 
                 </Column>
                
                 <Column flex="1">
                   <Button type="primary" onClick={()=>{
                     setTeamdata([...teamdata,memberData])
                     
                   }}>AddTeamMember</Button>
                 </Column>
                 </Card>
                  
                 <Card alignItems="center" justifyContent="space-between">
                
                 <MUIDataTable
                        columns={teamcolumns}
                        data={teamdata}
                        options={teamoptions}
                    />
                 </Card>
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