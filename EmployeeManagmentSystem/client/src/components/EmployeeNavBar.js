import React, { Component } from "react"
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

class EmployeeNavBar extends Component {

    render() {
        return (<Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="mr-2 d-block">Home</Nav.Link>
                        <Nav.Link href="#link" className="mr-2 d-block">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>)
    }
}

export default EmployeeNavBar