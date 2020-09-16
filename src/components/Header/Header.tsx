import React from "react";
import { AppContext } from "./../../context/AppContext";
import { Card } from "./../Card/Card";
import { Counter } from "./../Hooks/Hooks";

const Header = (props: any) => {
	// console.log("props", props);
	return (
		<>
			<Card title="hey" paragraph="test">
				testing children
			</Card>
			<Counter></Counter>
			<AppContext.Consumer>
				{({ authenticated }) => {
					if (authenticated) {
						return <h1>Logged in!</h1>;
					}
					return <h1>You need to sign in</h1>;
				}}
			</AppContext.Consumer>
		</>
	);
};

export default Header;
