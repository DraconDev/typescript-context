import React, { FC } from "react"; // importing FunctionComponent

type CardProps = {
	title: string;
	paragraph: string;
	children?: any;
};

//? Basic way. Children need to be added to types to be used.
// export const Card = ({ title, paragraph, children }: CardProps) => {
// 	return (
// 		<aside>
// 			<h2>{title}</h2>
// 			<p>{paragraph}</p>
// 			{children}
// 		</aside>
// 	);
// };

//? Children available without inclusion in types
export const Card: FC<CardProps> = ({ title, paragraph, children }) => {
	console.log("children", children);
	return (
		<aside>
			<h2>{title}</h2>
			<p>{paragraph}</p>
			{children}
		</aside>
	);
};

// export function Card({ title, paragraph, children }: CardProps) {
// 	console.log("children", children);
// 	return (
// 		<aside>
// 			<h2>{title}</h2>
// 			<p>{paragraph}</p>
// 			{children}
// 		</aside>
// 	);
// }

// const el = <Card title="Welcome!" paragraph="To this example" />;
