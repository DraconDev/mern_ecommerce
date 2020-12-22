import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container, Row, Col } from "react-bootstrap";

function App() {
	return (
		<div className="App">
			<h1>welcome to proshop</h1>

			{/* <Row></Row> */}
			<Container></Container>
			<Header></Header>
			<Footer></Footer>
		</div>
	);
}

export default App;
