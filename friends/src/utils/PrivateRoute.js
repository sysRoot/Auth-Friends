import React from 'react'; 
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {

	if (localStorage.getItem('token')) {
		return <Route {...rest} component={Component} />;
	}
	return <Redirect to="/" />;
};
