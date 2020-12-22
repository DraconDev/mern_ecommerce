import React from "react";
import { Container, Col, Row } from "react-bootstrap";

interface Props {}

function Footer(props: Props) {
	return (
		<Container>
			{" "}
			<Row></Row>
			<Col className="text-center py-3">Shop</Col>
		</Container>
	);
}

export default Footer;
