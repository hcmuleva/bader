import { LogoutOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Menu, Select, Switch } from 'antd';
import { css, StyleSheet } from "aphrodite";
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row } from "simple-flexbox";
import CalendarIcon from './../../assets/icons/calendar';
import FeedbackIcon from './../../assets/icons/feedback';
import NoticeBoardIcon from './../../assets/icons/notice-board';
import SchoolIcon from './../../assets/icons/school';


// import Logo from '../../../../assets/components/icon-logo';
let menus = [
  // { name: 'Discussions', key: 'discussions', link: '/discussions', order: 6, icon: CalendarIcon },
  { name: 'Notice Board', key: 'notice-board', link: '/notice-board', order: 7, icon: NoticeBoardIcon },
  { name: 'Calendar', key: 'calendar', link: '/calendar', order: 8, icon: CalendarIcon },
  { name: 'Mandir', key: 'mandir', link: '/mandir', order: 9, icon: SchoolIcon },
  { name: 'Feedback', key: 'feedback', link: '/feedback', order: 10, icon: FeedbackIcon },
];


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
  let path = 'manage-class';
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


  const fromStorage = localStorage.getItem('userProfile');
  const user = fromStorage ? JSON.parse(fromStorage) : undefined;

  const handleRoleChange = useCallback((role) => {
    if (role === 'Admin') {
      localStorage.setItem('selectedRole', role)
      history.push('/manage-org')
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
    console.log("param", param)
    setCurrent(param.key);
    history.push(`/${param.key}`);
  }

  const logout = () => {
    handleLogout(history);
  }


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
      {menus.map(menu => {
        return (
          showText ?
            <Menu.Item id={`${menu.key}-menu`} key={menu.key} link={menu.link} icon={<menu.icon fill="#fff" />}>
              {menu.name}
            </Menu.Item>
            :
            <Menu.Item id={`${menu.key}-menu`} key={menu.key} link={menu.link} icon={<menu.icon fill="#fff" />} />
        )
      })}
    </Menu>
  );

  const userProfile = user && user.user_avatar !== '' ? user&&user.user_avatar : undefined;

  //const schoolLogo = !schoolLoading && school.getSchoolSetting.sub_group_logo !== '' ? school.getSchoolSetting.sub_group_logo : undefined;
  const schoolLogo=undefined
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.subContainer)}>
        <div className="school-logo-horizontal">
          {showSchoolLogo &&
            <span className="cursor-pointer" onClick={() => {
              history.push("/schools")
              setCurrent('schools')
            }}>
              {schoolLogo ?
                <img src={schoolLogo} alt="logo" />
                :
                <div />
              }
            </span>
          }
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
          {user &&
            <div id="user-role-selection">
              <Select
                value={selectedRole}
                className="custom-select-header"
                onChange={handleRoleChange}
              >
                {user&&user.Assigned_Role&&user.Assigned_Role.map(role => (
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
                className={css(styles.avatar, styles.cursorPointer)}
              />
              :
              <Avatar className={css(styles.avatar, styles.cursorPointer)} shape="square" size={37} icon={<UserOutlined />} />
            }
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
