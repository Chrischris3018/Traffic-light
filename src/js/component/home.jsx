import React, { useState } from "react";

//create your first component
const Home = () => {
	const [litUp, setLitUp] = useState("");

	return (
		<>
			<div id="trafficTop"></div>
			<div id="container">
				<div onClick={() => setLitUp("red")} className={"light red" + (litUp === "red" ? " selected" : "")}></div>
				<div onClick={() => setLitUp("yellow")} className={"light yellow" + (litUp === "yellow" ? " selected" : "")}></div>
				<div onClick={() => setLitUp("green")} className={"light green" + (litUp === "green" ? " selected" : "")}></div>
			</div>
		</>
	);
};

export default Home;
