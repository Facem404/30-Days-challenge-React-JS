// index.js
import React from "react";
import ReactDOM from "react-dom";
import foto from "./yo.jpg";
/* import foto from "./frontend_technologies.png"; */

/* const user = (
	<div>
		<img src={foto} alt="foto" />
	</div>
); */

/* const formulario = (
	<div className="main-wrapper">
		<h1>SUSCRIBE</h1>
		<p>Sign up with your mail to blablabla</p>
		<div>
			<input type="text" placeholder="First name"></input>
			<input type="text" placeholder="Last name"></input>
			<input type="text" placeholder="Email"></input>
		</div>
		<button type="submit">Send</button>
	</div>
); */
const userCard = (
	<div className="wrapper">
		<img src={foto} alt="usuario" />
		<h2>Facundo Maggi</h2>
		<p>Front end Dev React</p>
		<h2>Skills</h2>
		<div className="box">HTML</div>
		<div className="box">CSS</div>
		<div className="box">JS</div>
		<div className="box">REACT</div>
		<p>Joined on Jan 1, 2022</p>
	</div>
);
const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(userCard, rootElement);
