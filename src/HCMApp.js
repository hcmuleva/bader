import React from 'react';
import './App.css';
import Navbar from './components/exp/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from 'antd';
import OnBoard from './components/exp/OnBoard';
import { Runner } from './components/exp/Runner';
import { Automationservice } from './components/exp/AutomationService';
import { Mysettings } from './components/exp/MySettings';
import { Analytics } from './components/exp/Analytics';
import { Dashboard } from './components/exp/DashBoard';
import { Pipeline } from './components/exp/Pipeline';
const { Header, Footer, Sider, Content } = Layout;
function HCMApp() {
    return (

      <Router>
        <Layout>
        <Navbar />
        </Layout>
        <Layout>
        <Sider>Sider</Sider>
        <Content>
        <Switch>
          <Route path='/' exact component={Automationservice} />
          <Route path='/about' component={Automationservice} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/mysettings' component={Mysettings} />
          <Route path='/runner' exect component={Runner}/>
          <Route path='/analytics' component={Analytics} />
          <Route path='/onboard' component={OnBoard} />
          <Route path='/pipeline' component={Pipeline}/>
        </Switch>
        </Content>
        </Layout>
      </Router>
    );
  }
    
  export default HCMApp;