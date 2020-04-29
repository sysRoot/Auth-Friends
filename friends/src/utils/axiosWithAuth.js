import axios from "axios";

export const authedAxios = () => {
	const token = JSON.parse(localStorage.getItem("token"));

	return axios.create({
		baseURL: "http://localhost:5000/api",
		headers: { Authorization: token },
	});
};
