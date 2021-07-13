import React, {useState} from 'react'
 import MandirCreateForm from './MandirCreateForm'
import { Button, Tabs } from 'antd';
import Hostel from './Hostel';
import Karykarini from './Karykarini';

const { TabPane } = Tabs;



export function Mandirdatacreationtabs(props) {
    const [curKey,setCurKey]=useState(0)
    function callback(key) {
        console.log(key);
      }
    return (
        <>
        <h1>Hello</h1>
          <Tabs defaultActiveKey="1" onChange={(key)=>{
              console.log("Called",key)

          }}>
    <TabPane tab="मंदिर डिटेल्स" key="1">
      Mandir Create Form at here 
      <Button onClick={()=>{
       
      }}>Next</Button>
      <MandirCreateForm/>
    </TabPane>
    <TabPane tab="धर्मशाला" key="2" >
    धर्मशाला addtion
    <Hostel/>
    </TabPane>
    <TabPane tab="मंदिर कमेटी" key="3">
    मंदिर कमेटी     Content of Tab Pane 3
    <Karykarini/>
    </TabPane>
  </Tabs>   
        </>
    )
}
