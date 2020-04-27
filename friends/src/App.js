import React from "react";
// import ReactDom from "react-dom";
import {Login} from "./component/auth/Login";
import Registration from "./component/auth/Registration";
import Dashboard from "./component/Dashboard";
import {PrivateRoute} from './utils/PrivateRoute'
// import Home from './component/auth/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import FriendCard from "./component/FriendCard";
import NavBar from './component/NavBar'
import AddFriend from './component/AddFriend'

function App() {
	return (
		<div>
			<div className="App">
				{/* <h1>My Auth Friends App</h1> */}
				<Router>
					<Route path="/" exact component={Login} />
          <Route path="/registration" exact component={Registration} />
					<PrivateRoute path="/dashboard" component={NavBar} />
					<PrivateRoute path="/dashboard" exact component={Dashboard} />
					<PrivateRoute path="/dashboard/add-friend" exact component={AddFriend} />
					<PrivateRoute path="/dashboard/friend/:id" exact component={FriendCard} />
				</Router>
				{/* <h1>Status: {props.loggedInStatus}</h1> */}
				{/* <Login /> */}
				{/* <Home /> */}
				{/* <Auth /> */}
			</div>
		</div>
	);
}

export default App;
