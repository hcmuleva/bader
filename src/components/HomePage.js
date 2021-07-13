import { css, StyleSheet } from 'aphrodite';
import React, { useState } from 'react';
import './../assets/css/gradeStyle.css';
import './../assets/css/iconStyle.css';
import './../assets/css/navbarStyle.css';
import './../assets/css/noticeBoardStyle.css';
import './../assets/css/quizStyle.css';
import './../assets/css/schoolSettingStyle.css';
import './../assets/css/style.css';
import './../assets/css/subjectStyle.css';
import './../assets/css/teacherStyle.css';
import './../assets/css/userProfileStyle.css';
import './../assets/css/userStyle.css';
import { Logout } from './auth/Logout';
import HorizontalNavbar from './navbar/horizontal';

const MyComponent = ()=>{
  return <h2>Here is your component</h2>
}
export function Homepage(props) {
  const [switchChecked, setSwitchChecked] = useState(false);

  const styles = StyleSheet.create({
    container: {
      height: '100%',
      minHeight: '100vh'
    },
    mainBlock: {
      backgroundColor: '#F7F8FC',
      width: switchChecked ? '100%' : 'calc(100% - 225px)'
    },
    headerBlock: {
      padding: 20,
    }
  });

  const handleSwitchChange = () => {
    setSwitchChecked(toggle => !toggle);
  }

  const handleLogout = history => {
    localStorage.removeItem('token')
    localStorage.removeItem('selectedRole');
    window.location.href = '/';
  }
  const [selectedRole, setSelectedRole] = useState(localStorage.getItem('selectedRole'));

  return (
    <div className={css(styles.container) + " scrollVisible d-flex"}>
      <div style={{ flexGrow: 1 }} className={css(styles.mainBlock) + " d-flex flex-column"}>          
          <HorizontalNavbar
            handleLogout={handleLogout}
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
            checked={switchChecked}
            onChangeSwitch={handleSwitchChange}
          />
      </div>
      
    </div>
  )
}
