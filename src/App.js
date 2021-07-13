import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { HorizontalNavbar, VerticalNavbar, HeaderComponent } from './components/views/navbar';
import ContentComponent from './components/organisms/ContentComponent';

import { ADMIN, STUDENT, TEACHER } from './assets/enums/common';
import { useHistory } from 'react-router-dom';

import './assets/css/style.css';
import './assets/css/navbarStyle.css';
import './assets/css/userProfileStyle.css';
import './assets/css/schoolSettingStyle.css';
import './assets/css/gradeStyle.css';
import './assets/css/noticeBoardStyle.css';
import './assets/css/userStyle.css';
import './assets/css/subjectStyle.css';
import './assets/css/teacherStyle.css';
import './assets/css/iconStyle.css';
import './assets/css/quizStyle.css';




const App = () => {
  const history = useHistory();
  const [switchChecked, setSwitchChecked] = useState(true);
  const [selectedRole, setSelectedRole] = useState(localStorage.getItem('selectedRole'));
  const useForceUpdate = () => useState()[1];
  const [steps, setSteps] = useState([]);

  const resize = useForceUpdate();


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

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    }
  }, [resize]);




  const handleSwitchChange = () => {
    setSwitchChecked(toggle => !toggle);
  }

  const handleLogout = history => {
    localStorage.removeItem('token')
    localStorage.removeItem('selectedRole');
    window.location.href = '/';
  }

  const hideVerticalNav = window.innerWidth <= 768;

  return (
    <div className={css(styles.container) + " scrollVisible d-flex"}>

      {!switchChecked && !hideVerticalNav &&
        <VerticalNavbar selectedRole={selectedRole} />
        
      }
      <div style={{ flexGrow: 1 }} className={css(styles.mainBlock) + " d-flex flex-column"}>
        {switchChecked ?
          <HorizontalNavbar
          className={css(styles.headerBlock)}
          handleLogout={handleLogout}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          checked={switchChecked}
          onChangeSwitch={handleSwitchChange}
          />
          :
          <HeaderComponent
            handleLogout={handleLogout}
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
            checked={switchChecked}
            onChangeSwitch={handleSwitchChange}
            className={css(styles.headerBlock)}
          />
        }
        <ContentComponent switchChecked={switchChecked} />
      </div>
    </div>
  )
}

export default App;
