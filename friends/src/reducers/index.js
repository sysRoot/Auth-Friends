import { combineReducers } from "redux";
import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	GETFRIENDS_START,
	GETFRIENDS_SUCCESS,
	GETFRIENDS_ERROR,
	GETFRIEND_START,
	GETFRIEND_SUCCESS,
	GETFRIEND_ERROR,
	ADDFRIEND_START,
	ADDFRIEND_SUCCESS,
	ADDFRIEND_ERROR,
} from "../actions";
import { initialLogin, initialFriends } from "../state/";

const rootReducer = combineReducers({
	login: (state = initialLogin, action) => {
		switch (action.type) {
			case LOGIN_START: {
				const nextState = { ...state, loading: true, error: "" };
				return nextState;
			}
			case LOGIN_SUCCESS: {
				const nextState = {
					...state,
					token: action.payload,
					loading: false,
					isLoggedIn: true,
					error: "",
				};
				return nextState;
			}
			case LOGIN_ERROR: {
				const nextState = {
					...state,
					loading: false,
					error: action.payload.message,
				};
				return nextState;
			}
			default:
				return state;
		}
	},
	friends: (state = initialFriends, action) => {
		switch (action.type) {
			case GETFRIENDS_START: {
				const nextState = { ...state, loading: true, error: "" };
				return nextState;
			}
			case GETFRIENDS_SUCCESS: {
				const nextState = {
					...state,
					friends: action.payload,
					loading: false,
					error: "",
				};
				return nextState;
			}
			case GETFRIENDS_ERROR: {
				const nextState = {
					...state,
					loading: false,
					error: action.payload.message,
				};
				return nextState;
			}
			case GETFRIEND_START: {
				const nextState = { ...state, loading: true, error: "" };
				return nextState;
			}
			case GETFRIEND_SUCCESS: {
				const nextState = {
					...state,
					friend: action.payload,
					loading: false,
					error: "",
				};
				return nextState;
			}
			case GETFRIEND_ERROR: {
				const nextState = {
					...state,
					loading: false,
					error: action.payload.message,
				};
				return nextState;
			}
			case ADDFRIEND_START: {
				const nextState = { ...state, loading: true, error: "" };
				return nextState;
			}
			case ADDFRIEND_SUCCESS: {
				const nextState = {
					...state,
					friends: action.payload,
					loading: false,
					error: "",
				};
				return nextState;
			}
			case ADDFRIEND_ERROR: {
				const nextState = {
					...state,
					loading: false,
					error: action.payload.message,
				};
				return nextState;
			}
			default:
				return state;
		}
	},
});

export default rootReducer;
