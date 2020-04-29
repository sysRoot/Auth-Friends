import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFriend } from "../actions";

const FriendCard = (props) => {
	const dispatch = useDispatch();

	const friends = useSelector((state) => state.friends);
	let id = props.match.params.id;

	React.useEffect(() => dispatch(getFriend(id)), [dispatch, id]);

	if (friends.loading) {
		return <p> isLoading!</p>;
	}
	if (friends.friend) {
		return (
			<p>
				{friends.friend.name} -- {friends.friend.age} --{" "}
				{friends.friend.email}
			</p>
		);
	}

	return <p>Loading</p>;
};

export default withRouter(FriendCard);
