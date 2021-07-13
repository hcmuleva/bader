import React, { useEffect, useCallback, useState } from "react";
import { Switch, Select, Button, Avatar, Menu, Dropdown } from "antd";
import { LogoutOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import { Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
// import IconBellNew from "../../assets/components/icon-bell-new";
import { Link, useHistory } from 'react-router-dom';
//import getMenus, { commonMenus } from './../../../../assets/menus';
import FeedbackIcon from './../../assets/icons/feedback';
import CalendarIcon from './../../assets/icons/calendar';
import ClassIcon from './../../assets/icons/class';
import SchoolIcon from './../../assets/icons/school';
import UserIcon from './../../assets/icons/user';
import NoticeBoardIcon from './../../assets/icons/notice-board';
//import { currentActive } from './../horizontal';

const { Option } = Select;

const headerStyle = StyleSheet.create({
  avatar: {
    height: 37,
    width: 37,
    borderRadius: 4,
    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.1)',
    objectFit: 'cover'
  },
  container: {
    height: 40
  },
  cursorPointer: {
    cursor: "pointer"
  },
  name: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "20px",
    textAlign: "right",
    letterSpacing: 0.2,
    "@media (max-width: 768px)": {
      display: "none"
    }
  },
  separator: {
    borderLeft: "1px solid #DFE0EB",
    marginLeft: 32,
    marginRight: 32,
    height: 32,
    width: 2,
    "@media (max-width: 768px)": {
      marginLeft: 12,
      marginRight: 12
    }
  },
  title: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "30px",
    letterSpacing: 0.3,
    "@media (max-width: 768px)": {
      marginLeft: 36
    },
    "@media (max-width: 468px)": {
      fontSize: 20
    }
  },
  iconStyles: {
    cursor: "pointer",
    marginLeft: 25,
    "@media (max-width: 768px)": {
      marginLeft: 12
    }
  },
  headerRowStyle: {
    minHeight: 60,
    paddingRight: 25,
    backgroundColor: '#111945',
    position: 'sticky',
    top: 0,
    zIndex: 1001,
    "@media (max-width: 425px)": {
      paddingRight: 15
    },
  },
  logoutButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16
  }
});

const HeaderComponent = ({ checked, onChangeSwitch, selectedRole, setSelectedRole, handleLogout }) => {
  const history = useHistory();
  const [current, setCurrent] = useState(history.location.pathname);

  const fromStorage = localStorage.getItem('userProfile');
  const user = fromStorage ? JSON.parse(fromStorage) : undefined;
  let menus = [
    // { name: 'Discussions', key: 'discussions', link: '/discussions', order: 6, icon: CalendarIcon },
    { name: 'Notice Board', key: 'notice-board', link: '/notice-board', order: 7, icon: NoticeBoardIcon },
    { name: 'Calendar', key: 'calendar', link: '/calendar', order: 8, icon: CalendarIcon },
    { name: 'Mandir', key: 'mandir', link: '/mandir', order: 9, icon: SchoolIcon },
    { name: 'Feedback', key: 'feedback', link: '/feedback', order: 10, icon: FeedbackIcon },
  ];
  const handleRoleChange = useCallback((role) => {
    localStorage.setItem('selectedRole', role)
    switch (role) {
      case 'Admin':
        history.push('/manage-org')
        break;
      case 'Teacher':
        history.push('/teacher')
        break;
      case 'Student':
        history.push('/student')
        break;
      case 'Parent':
        history.push('/parent')
        break;
      default:
    }

    setSelectedRole(role);
  }, [history, setSelectedRole]);

  useEffect(() => {
    if (user) {
      let findRole = null;
      if (selectedRole !== '') {
        findRole = user.Assigned_Role.find(x => x.user_role === selectedRole);
      }
      if (!findRole) {
        handleRoleChange(user.Assigned_Role[0].user_role);
      }
    }
  }, [user, selectedRole, handleRoleChange]);

  const logout = () => {
    handleLogout(history);
  }

  const onSelectMenu = (param) => {
    setCurrent(param.key);
    history.push(`/${param.key}`);
  }


  menus = menus.sort((a, b) => (a.order - b.order))

  const userProfile = user ? user.user_avatar !== '' ? user&&user.user_avatar : undefined : undefined;

  const dropdownMenu = window.innerWidth <= 768;

  const renderMenu = (
    <Menu
      selectedKeys={[current]}
      className={`header-menu horizontal ${dropdownMenu ? 'has-dropdown' : ''}`}
      onClick={onSelectMenu}
      theme={dropdownMenu ? "dark" : "light"}
    >
      {menus.map(menu => {
        return (
          <Menu.Item key={menu.key} link={menu.link} icon={<menu.icon fill="#fff" />}>
            {menu.name}
          </Menu.Item>
        )
      })}
    </Menu>
  );

  return (
    <Row alignItems="center" className={css(headerStyle.headerRowStyle)}>
      <div style={{ flex: 1, margin: '0 16px', visibility: dropdownMenu ? 'initial' : 'hidden' }}>
        <Dropdown overlay={renderMenu} trigger={['click', 'hover']}>
          <Button icon={<MenuOutlined />} ghost />
        </Dropdown>
      </div>
      {user &&
        <div id="user-role-selection">
          <Select
            value={selectedRole}
            className="custom-select-header"
            onChange={handleRoleChange}
          >
            {user.Assigned_Role.map(role => (
              <Option className="custom-select-option" key={role.user_role}>I am <span className="hightlighted-role">{role.user_role}</span></Option>
            ))}
          </Select>
        </div>
      }
      <Link to="/profile" style={{ marginLeft: 14 }} id="user-profile-link-header">
        {userProfile ?
          <img
            src={userProfile}
            alt="avatar"
            className={css(headerStyle.avatar, headerStyle.cursorPointer)}
          />
          :
          <Avatar className={css(headerStyle.avatar, headerStyle.cursorPointer)} shape="square" size={37} icon={<UserOutlined />} />
        }
      </Link>
      <Switch
        style={{ marginLeft: 16, backgroundColor: '#ffffff9e' }}
        checked={checked}
        onChange={onChangeSwitch}
        id="switch-layout"
      />
      <Button id="header-logout-button" className={css(headerStyle.logoutButton)} style={{ marginLeft: 16 }} icon={<LogoutOutlined />} onClick={logout} />
    </Row>
  );
};

export default HeaderComponent;
