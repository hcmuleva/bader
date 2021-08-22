import React, { useState, useEffect } from 'react'
import { Row, Col, Skeleton, Switch, Card, Avatar, Select, Button, Divider } from 'antd';

import { EditOutlined, EllipsisOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { EducationComponent } from './User/UserComponent/EducationComponent';
import { AddressComponent } from './common/AddressComponent';
import { WorkExperienceComponent } from './User/UserComponent/WorkExperienceComponent';
import { Personaldetails } from './User/UserComponent/PersonalDetails';
import { Business } from './User/UserComponent/Business';
import { AboutMeComponent } from './User/UserComponent/AboutMeComponent';
import { AboutComponent } from './AboutComponent';
import { Profilecard } from './User/UserComponent/ProfileCard';
const { Meta } = Card;
const { Option } = Select;

export function ProfileComponent(props) {

  const [loading, setLoading] = useState(false)
  const [isDisplay, setIsDisplay] = useState(true)
  const [compname, setCompname] = useState('')
  const [educationdata, setEducationdata] = useState({})
  const [personaldata, setPersonaldata] = useState({})
  const [businessdata, setBusinessdata] = useState({})
  const [aboutmedata, setAboutmedata] = useState({})
  const onChange = checked => {
    setLoading(!checked);
  };
  const userdata = JSON.parse(localStorage.getItem('user'))
  const [userStorage, setUserStorage] = useState(userdata)
  console.log("userdata in profileComp", userdata)
  const getDialog = () => {
    if (isDisplay) {
      return <>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
            <Button
              type="dashed"
             
              onClick={
                () =>{
                  setCompname('व्यवसाय')
                  setIsDisplay(false)
              }
                
            }
              

            >
              <PlusOutlined /> व्यवसाय
            </Button>
          </Col>
          <Col className="gutter-row" span={12}>
            <Button
              type="dashed"
              onClick={
                () =>{
                  setCompname('शिक्षा')
                  setIsDisplay(false)
              }
                
            }             
            >
              <PlusOutlined /> शिक्षा
            </Button>
          </Col>
        </Row>
        <Divider dashed></Divider>
        <Row gutter={{ xs: 8, sm: 12, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
            <Button
              type="dashed"
              onClick={() => {
                setCompname('प्राइवेट')
                setIsDisplay(false)
              }
              }
            >
              <PlusOutlined /> प्राइवेट
            </Button></Col>
          
          <Col className="gutter-row" span={12}>
            <Button
              type="dashed"
              onClick={
                () =>{
                  setCompname('मेरे बारे में')
                  setIsDisplay(false)
              }
                
            }
            >
              <PlusOutlined /> मेरे बारे में
            </Button>
          </Col>
        </Row>

      </>
    } else {

      switch (compname) {

        case "प्राइवेट":
          return <Personaldetails setIsDisplay={setIsDisplay} setPersonaldata={setPersonaldata} userStorage={userStorage} />
        case "शिक्षा":
          return <EducationComponent setIsDisplay={setIsDisplay} setEducationdata={setEducationdata} userStorage={userStorage} />
        case "व्यवसाय":
          return <Business setIsDisplay={setIsDisplay} setBusinessdata={setBusinessdata} userStorage={userStorage} />
        case "मेरे बारे में":
          return <AboutMeComponent setIsDisplay={setIsDisplay} setAboutmedata={setAboutmedata} userStorage={userStorage} />
        case "Address":
          return <AddressComponent isDisplay={true} />
        case "Experience":
          return <WorkExperienceComponent isDisplay={true} />

      }
    }


  }
  useEffect(() => {
    getDialog()
    console.log("Dialog ", compname, "  isDisplay", isDisplay)
  }, [compname, isDisplay])
  useEffect(() => {
    if (educationdata.fields) {
      educationdata.fields.map(elm => {
      })
    }
  }, [educationdata])

  const style = { background: '#0092ff', padding: '8px 0' };
  const categoriesButtons = () => {

  }
  return (
    <>
      <Divider dashed>{compname?compname:"प्रोफाइल"}</Divider>
      {getDialog()}
      <Divider>MeriJankari</Divider>
      <Profilecard/>
    </>
  )
}
