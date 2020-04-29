import React from "react";
// import axios from "axios";
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { login } from "../../actions";

export const Login = () => {
  let history = useHistory();

  const [userObject, setUserObject] = React.useState({
		username: "",
		password: "",
	});
  const dispatch = useDispatch();

  const loginItem = useSelector(state => state.login)
  const loginCallback = () => {
    return history.push('/dashboard')
  }
	const handleSubmit = async (event) => {
		event.preventDefault();

 dispatch(login(userObject, loginCallback))

	};

	const handleText = (e) => {
    e.persist();
    setUserObject((state) => {
			return { ...state, [e.target.name]: e.target.value };
		});
	};

	return (
		<div>
			<Form onSubmit={(e) => handleSubmit(e)} inline>
				<FormGroup>
					<Label for="usernameField" hidden>
						Username
					</Label>
					<Input
						type="text"
						name="username"
						id="usernameField"
						value={userObject.username}
						placeholder="Username"
						onChange={(e) => handleText(e)}
					/>
				</FormGroup>{" "}
				<FormGroup>
					<Label for="passwordField" hidden>
						Password
					</Label>
					<Input
						type="password"
						name="password"
						id="passwordField"
						value={userObject.password}
						placeholder="Password"
						onChange={(e) => handleText(e)}
					/>
				</FormGroup>{" "}
				<Button onSubmit={(e) => handleSubmit(e)} disabled={loginItem.loading}>{loginItem.loading ? "Loading" : "Submit"}</Button>
			</Form>
		</div>
	);
};
