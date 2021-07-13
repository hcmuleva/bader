import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ForgotPassword from './components/auth/ForgotPassword';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Homepage } from './components/HomePage';

export function HCM(props) {

  const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem('token') ? true : false);
  console.log("IS LOGGED ",isLoggedin)
  return (
    <>
    <Router>
      <Switch>

      <Route path="/login" component={Login} />
      <Route path="/home" component ={Homepage} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/register" component={Register}/>
      {isLoggedin ? <Homepage setIsLoggedin={setIsLoggedin} /> : <Login setIsLoggedin={setIsLoggedin} />}
      </Switch>
      </Router>
    </>
  )
}


