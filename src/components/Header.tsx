import { AppContext } from "./../context/AppContext";
import React from "react";

const Header = (props: any) => {
	// console.log("props", props);
	return (
		<AppContext.Consumer>
			{({ authenticated }) => {
				if (authenticated) {
					return <h1>Logged in!</h1>;
				}
				return <h1>You need to sign in</h1>;
			}}
		</AppContext.Consumer>
	);
};

export default Header;
