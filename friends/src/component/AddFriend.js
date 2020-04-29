import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addFriend } from '../actions'
const AddFriend = () => {
    const dispatch = useDispatch();
    const history = useHistory()
	const [newFriend, setNewFriend] = React.useState({
		name: "",
		email: "",
		age: 0,
	});

	const handleInput = (e) => {
        e.persist()

		setNewFriend((state) => {
			return { ...state, [e.target.name]: e.target.value };
		});
    };

    const navCallback = () => history.push('/dashboard')

    const submitNewFriend = (e) => {
        e.preventDefault()
        dispatch(addFriend(newFriend, navCallback))
    }
    
	return (
		<Form onSubmit={e => submitNewFriend(e)}>
			<FormGroup>
				<Label for="Name">Name</Label>
				<Input
					type="text"
					name="name"
					id="Name"
					value={newFriend.name}
					onChange={(e) => handleInput(e)}
					placeholder="Enter Name"
				/>
			</FormGroup>
			<FormGroup>
				<Label for="Email">Email</Label>
				<Input
					type="email"
					name="email"
					id="Email"
					value={newFriend.email}
					onChange={(e) => handleInput(e)}
					placeholder="somebody@someemail.net"
				/>
			</FormGroup>
			<FormGroup>
				<Label for="Age">Age</Label>
				<Input
					type="number"
					name="age"
					id="Age"
					value={newFriend.password}
					onChange={(e) => handleInput(e)}
					placeholder="0"
				/>
			</FormGroup>

			<Button onSubmit={e => submitNewFriend(e)}>Submit</Button>
		</Form>
	);
};

export default AddFriend;
