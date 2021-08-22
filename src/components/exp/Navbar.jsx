import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activeStyle>
            AutomationService
          </NavLink>
          <NavLink to='/dashboard' activeStyle>
            DashBoard
          </NavLink>
          <NavLink to='/mysettings' activeStyle>
            MySettings
          </NavLink>
          <NavLink to='/runner' activeStyle>
            Runner
          </NavLink>
          <NavLink to='/analytics' activeStyle>
          Analytics
          </NavLink>
          <NavLink to='/pipeline' activeStyle>
            Pipeline
          </NavLink>
          <NavLink to='/onboard' activeStyle>
            OnBoard
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
        <Avatar
      src={<Image src="https://gyanstreamlms.s3-ap-south-1.amazonaws.com/education/sgM1f2QC89nADFWZda5EpA.jpeg" />}
    />
          {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink> */}
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;