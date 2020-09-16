import React from "react";

//? Specific
// export const AppContext = React.createContext({
// 	authenticated: true,
// 	lang: "en",
// 	theme: "dark",
// });

//? Generic

//? type or interface works
// type ContextProps = {
// 	authenticated: boolean;
// 	lang: string;
// 	theme: string;
// }

interface ContextProps {
	authenticated: boolean;
	lang: string;
	theme: string;
}

export const AppContext = React.createContext<Partial<ContextProps>>({});
