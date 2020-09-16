import { AppContext } from "../context/AppContext";

const Header = () => {
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
