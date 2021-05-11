import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<About></About>
			<Education></Education>
			<Skills></Skills>
			<Projects></Projects>
			<Contact></Contact>
		</>
	);
}

export default App;
