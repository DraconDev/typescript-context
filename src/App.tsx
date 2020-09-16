import React from "react";
import "./App.css";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";

const App = () => {
	return (
		<AppContext.Provider
			value={{
				lang: "de",
				authenticated: true,
				theme: "light",
			}}
		>
			<Header />
			{/* <h1>test</h1> */}
		</AppContext.Provider>
	);
};
export default App;
