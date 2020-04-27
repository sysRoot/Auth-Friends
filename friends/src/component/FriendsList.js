import React from "react";
import Friend from "./Friend";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from "../actions";

const FriendsList = () => {
	const dispatch = useDispatch();
	const friends = useSelector((state) => state.friends.friends);

	React.useEffect(() => dispatch(getFriends()), [dispatch]);
    if (friends.loading) {
        return ( <p>Loading...</p>)
    }
	return (

		<ul>
			{friends.map((friend) => (
				<Friend key={friend.id} friend={friend} />
			))}
		</ul>
	);
};

export default FriendsList;
