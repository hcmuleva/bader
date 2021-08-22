import React,{useState} from 'react'
import { Layout ,Menu, Breadcrumb, Button} from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { MailOutlined, AppstoreOutlined,  } from '@ant-design/icons';

import {HomeComponent} from "./components/HomeComponent";
import {ArticlesComponent} from "./components/ArticlesComponent";
import {AboutComponent} from "./components/AboutComponent";
import {ContactComponent} from "./components/ContactComponent";
import { Gurujan } from './components/Gurujan';
import {ProfileComponent} from './components/ProfileComponent'
import {Information} from './components/Information'
import { Logout } from './components/auth/Logout';
const { Header, Footer, Sider, Content } = Layout;

export function Samajapp(props) {
    const[menukey,setMenukey]=useState(1)
    const { SubMenu } = Menu;

    return (
      <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} onClick={(item,key )=>{
          setMenukey(item.key)
        }}
        >
          <Menu.Item key="gurujan">गुरुजन</Menu.Item>
          <Menu.Item key="profile">प्रोफाइल</Menu.Item>
          <Menu.Item key="information">Information</Menu.Item>
          <SubMenu key="SubMenu" icon={<UserOutlined />} title="Profile">
            <Menu.Item key="myprofile">MyProfile</Menu.Item>
            <Menu.Item key="signout">Logout</Menu.Item>
        </SubMenu>
          
        </Menu>
       
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          {"gurujan"==menukey?<Gurujan/>:""}
          {"profile"==menukey?<ProfileComponent/>:""}
          {"information"==menukey?<Information/>:""}
          {"myprofile"==menukey?<ProfileComponent/>:""}
          {"signout"==menukey?<Logout setIsLoggedin={props.setIsLoggedin}/>:""}
         
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>ई-समाज ©2021 ई-मिलान टीम द्वारा निर्मित </Footer>
    </Layout>
    )
}
