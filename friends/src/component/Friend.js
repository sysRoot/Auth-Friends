import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
	return (
		<li>
			<Link to={`/dashboard/friend/${friend.id}`}>
				{friend.name} -- {friend.age} -- {friend.email}
			</Link>
		</li>
	);
};

export default Friend;
