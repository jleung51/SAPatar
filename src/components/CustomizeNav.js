import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap'

class CustomizeNav extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#homes">Eyes</Nav.Link>
<<<<<<< HEAD
                <Nav.Link href="#homses">Eyesbrows</Nav.Link>
=======
                <Nav.Link href="#homses">Eyebrows</Nav.Link>
>>>>>>> 1616125064f2a9761669b88f7e18c04bed3b11d0
                <Nav.Link href="#homea">Hair</Nav.Link>
                <Nav.Link href="#h">Mouth</Nav.Link>
                <Nav.Link href="#hom">Skin</Nav.Link>
                <Nav.Link href="#link">Wardrobe</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default CustomizeNav;

