import React, { useState, useEffect, useCallback } from 'react'

import { Menu, Switch, Select, Button, Avatar, Dropdown } from 'antd';
import { LogoutOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';

import { Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";

import { useHistory, Link } from 'react-router-dom';
import getMenus, { commonMenus } from './../../../../assets/menus';
// import Logo from '../../../../assets/components/icon-logo';

//import { useQuery } from '@apollo/react-hooks';
// import { GET_MY_SCHOOL_SETTING } from '../../../../graphql/school/query/getMySchoolSetting';

const { Option } = Select;

const styles = StyleSheet.create({
  container: {
    minHeight: 60,
    backgroundColor: '#111945',
    padding: '0 25px',
    position: 'sticky',
    top: 0,
    zIndex: 1001,
    "@media (max-width: 425px)": {
      padding: '0 15px'
    },
  },
  subContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 1600,
    margin: '0 auto'
  },
  avatar: {
    height: 37,
    width: 37,
    borderRadius: 4,
    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.1)',
    objectFit: 'cover'
  },
  cursorPointer: {
    cursor: "pointer"
  },
  logoutButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16
  }
});

export const currentActive = (pathname) => {
  let path = 'manage-users';
  if (pathname === '/manage-users') {
    path = 'manage-users';
  } else if (pathname === '/teacher') {
    path = 'teacher';
  } else if (pathname === '/student') {
    path = 'student';
  } else if (pathname === '/parent') {
    path = 'parent';
  } else if (pathname === '/schools') {
    path = 'schools';
  } else if (pathname === '/notice-board') {
    path = 'notice-board';
  } else if (pathname === '/calendar') {
    path = 'calendar';
  } else if (pathname === '/feedback') {
    path = 'feedback';
  } else if (pathname === '/help-section') {
    path = 'help-section';
  } else if (pathname === '/messages') {
    path = 'messages';
  }

  return path;
}

const HorizontalNavbar = ({ checked, onChangeSwitch, selectedRole, setSelectedRole, handleLogout }) => {
  const history = useHistory();

  const [current, setCurrent] = useState(currentActive(history.location.pathname));

  //const { loading: schoolLoading, data: school } = useQuery(GET_MY_SCHOOL_SETTING);

  const fromStorage = localStorage.getItem('userProfile');
  const user = fromStorage ? JSON.parse(fromStorage) : undefined;

  const handleRoleChange = useCallback((role) => {
    if (role === 'Admin') {
      localStorage.setItem('selectedRole', role)
      history.push('/manage-family')
    } else if (role === 'Teacher' || role === 'Student') {
      localStorage.setItem('selectedRole', role)
      history.push('/teacher')
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

  useEffect(() => {
    setCurrent(currentActive(history.location.pathname))
  }, [history.location.pathname])

  const onSelectMenu = (param) => {
    setCurrent(param.key);
    history.push(`/${param.key}`);
  }

  const logout = () => {
    handleLogout(history);
  }

  let menus = [...getMenus(selectedRole), ...commonMenus];

  menus = menus.sort((a, b) => (a.order - b.order))

  const showText = window.innerWidth > 1015 || window.innerWidth <= 622;

  const dropdownMenu = window.innerWidth <= 622;

  const showSchoolLogo = window.innerWidth > 768;

  const renderMenu = (extraOptions = {}) => (
    <Menu
      selectedKeys={[current]}
      className={`header-menu horizontal ${dropdownMenu ? 'has-dropdown' : ''}`}
      style={{ flex: 1, margin: showSchoolLogo ? '0 16px' : '0 16px 0 0' }}
      onClick={onSelectMenu}
      theme={dropdownMenu ? "dark" : "light"}
      {...extraOptions}
    >
      {/* {menus.map(menu => {
        return (
          showText ?
            <Menu.Item id={`${menu.key}-menu`} key={menu.key} link={menu.link} icon={<menu.icon fill="#fff" />}>
              {menu.name}
            </Menu.Item>
            :
            <Menu.Item id={`${menu.key}-menu`} key={menu.key} link={menu.link} icon={<menu.icon fill="#fff" />} />
        )
      })} */}
    </Menu>
  );

  const userProfile = user && user.user_avatar !== '' ? user.user_avatar : undefined;

  //const schoolLogo = !schoolLoading && school.getSchoolSetting.sub_group_logo !== '' ? school.getSchoolSetting.sub_group_logo : undefined;
const schoolLogo="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fschool%2Blogo%2Bdesign&psig=AOvVaw3TD8Y1uGeTagLxcoqL_FHY&ust=1624432486865000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNCCyt7YqvECFQAAAAAdAAAAABAD"
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.subContainer)}>
        <div className="school-logo-horizontal">
          {/* {showSchoolLogo &&
            <span className="cursor-pointer" onClick={() => {
              history.push("/schools")
              setCurrent('schools')
            }}>
              {schoolLogo ?
                <img src={schoolLogo} alt="" />
                :
                <div />
              }
            </span>
          } */}
        </div>
        {dropdownMenu ?
          <div style={{ flex: 1, margin: showSchoolLogo ? '0 16px' : '0 16px 0 0' }}>
            <Dropdown overlay={renderMenu()} trigger={['click', 'hover']}>
              <Button icon={<MenuOutlined />} ghost />
            </Dropdown>
          </div>
          :
          renderMenu({ mode: "horizontal" })
        }
        <Row alignItems="center">
          {/* {user &&
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
          } */}
          <Link to="/profile" style={{ marginLeft: 14 }} id="user-profile-link-header">
            {/* {userProfile ?
              <img
                src={userProfile}
                alt="avatar"
                className={css(styles.avatar, styles.cursorPointer)}
              />
              :
              <Avatar className={css(styles.avatar, styles.cursorPointer)} shape="square" size={37} icon={<UserOutlined />} />
            } */}
          </Link>
          <Switch
            style={{ marginLeft: 16 }}
            checked={checked}
            onChange={onChangeSwitch}
            id="switch-layout"
          />
          <Button id="header-logout-button" className={css(styles.logoutButton)} icon={<LogoutOutlined />} onClick={logout} />
        </Row>
      </div>
    </div>
  )
}

export default HorizontalNavbar;
