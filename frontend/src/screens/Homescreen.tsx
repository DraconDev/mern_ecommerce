import React from "react";
import { Col, Container } from "react-bootstrap";
import products from "./../products";

interface Props {}

function Homescreen(props: Props) {
	return (
		<Container>
			{products.map((product) => (
				<Col sm={12} md={6} lg={4}><h3>{product.name}</h3></Col>
			))}
		</Container>
	);
}

export default Homescreen;
