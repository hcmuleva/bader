import React, { useState } from 'react';

import App from './App';
import Login from './components/auth/Login';

//import { ApolloProvider } from '@apollo/react-hooks';
//import { client } from './components/auth/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ForgotPassword } from './components/organisms/LazyRoutes';

const Authentication = () => {
	const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem('token') ? true : false);
	console.log("IS LOGIN ", isLoggedin)
	return (
		<Router>
			{/* <ApolloProvider client={client}> */}
				<Switch>
					<Route path="/forgot-password" component={ForgotPassword} />
					{isLoggedin ? <App setIsLoggedin={setIsLoggedin} /> : <Login setIsLoggedin={setIsLoggedin} />}
				</Switch>
			{/* </ApolloProvider> */}
		</Router>
	);
};

export default Authentication;
