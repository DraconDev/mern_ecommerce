import React from "react";
import {
	Navbar,
	Nav,
	Container,
	Button,
	Form,
	FormControl,
	NavDropdown,
} from "react-bootstrap";

interface Props {}

function Header(props: Props) {
	return (
		<header>
			<Navbar bg="primary" expand="lg">
				<Navbar.Brand href="/">Ecommerce Shop</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/cart">
							<i className="fas fa-shopping-cart"></i>Cart
						</Nav.Link>
						<Nav.Link href="/login">
							<i className="fas fa-user"></i>CartLogin
						</Nav.Link>
						<NavDropdown title="Items" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
}

export default Header;
