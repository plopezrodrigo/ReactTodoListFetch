import React from "react";
import SubmitForm from "./SubmitForm";


//create your first component
const Home = () => {
	return (
		<div>
			<div className="border">
			<h1 className="text-center mt-5">todos</h1>
			<SubmitForm/>
			</div>
		</div>
	);
};

export default Home;
