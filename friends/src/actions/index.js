import axios from "axios";
import { authedAxios } from "../utils/axiosWithAuth";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const GETFRIENDS_START = "GETFRIENDS_START";
export const GETFRIENDS_SUCCESS = "GETFRIENDS_SUCCESS";
export const GETFRIENDS_ERROR = "GETFRIENDS_ERROR";

export const GETFRIEND_START = "GETFRIEND_START";
export const GETFRIEND_SUCCESS = "GETFRIEND_SUCCESS";
export const GETFRIEND_ERROR = "GETFRIEND_ERROR";

// export const LOGIN_START = 'LOGIN_START';
export const ADDFRIEND_START = 'ADDFRIEND_START';
export const ADDFRIEND_SUCCESS = 'ADDFRIEND_SUCCESS';
export const ADDFRIEND_ERROR = 'ADDFRIEND_ERROR';

export const login = (userObject, callback) => (dispatch) => {
	dispatch({ type: LOGIN_START });
	axios
		.post("http://localhost:5000/api/login", userObject)
		.then((response) => {
			console.log(response);
			dispatch({ type: LOGIN_SUCCESS, payload: response.data.payload });
			localStorage.setItem(
				"token",
				JSON.stringify(response.data.payload)
			);
			return callback();
		})
		.catch((error) => {
			dispatch({ type: LOGIN_ERROR, payload: error });
			console.log("login error", error);
		});
};

export const getFriends = () => (dispatch) => {
	dispatch({ type: GETFRIENDS_START });
	authedAxios()
		.get("/friends")
		.then((res) => {
			dispatch({ type: GETFRIENDS_SUCCESS, payload: res.data });
			console.log(res);
		})
		.catch((err) => {
			dispatch({ type: GETFRIENDS_ERROR, payload: err });
			console.log(err);
		});
};

export const getFriend = (id) => (dispatch) => {
	dispatch({ type: GETFRIEND_START });
	authedAxios()
		.get(`/friends/${id}`)
		.then((res) => {
			dispatch({ type: GETFRIEND_SUCCESS, payload: res.data });
			console.log(res);
		})
		.catch((err) => {
			dispatch({ type: GETFRIEND_ERROR, payload: err });
			console.log(err);
		});
};
export const addFriend = (friendToAdd, callback) => (dispatch) => {
	dispatch({ type: ADDFRIEND_START });
	authedAxios()
		.post(`/friends/`, friendToAdd)
		.then((res) => {
			dispatch({ type: ADDFRIEND_SUCCESS, payload: res.data });
            console.log(res);
            return callback();
		})
		.catch((err) => {
			dispatch({ type: ADDFRIEND_ERROR, payload: err });
			console.log(err);
		});
};
