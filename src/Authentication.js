import React, { useState,useEffect } from 'react';


import Login from './components/auth/Login';
import Register from './components/auth/Register'
import ForgotPassword from './components/auth/ForgotPassword';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HCMApp from './HCMApp';
import { Samajapp } from './SamajApp';


const Authentication = () => {
	const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem('Accesstoken') ? true : false);
	const getComponent =()=>{
		console.log("Component is reloading", "and also isloggedin", isLoggedin)
		return isLoggedin ? <Samajapp setIsLoggedin={setIsLoggedin} /> : <Login setIsLoggedin={setIsLoggedin} />
	}
	React.useEffect(()=>{
		getComponent()
	},[isLoggedin])
	return (
		<Router>
				<Switch>
					<Route path="/forgot-password" component={ForgotPassword} />
					
					{getComponent()}
				</Switch>
		</Router>
	);
};

export default Authentication;
