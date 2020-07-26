import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

import styles from '../styles/styles';

class CustomizeNav extends Component {
    render() {
        return (
          <div style={styles.customizeModal.navbar}>
            <Navbar bg="light" expand="lg" >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#homes">Eyes</Nav.Link>
                  <Nav.Link href="#homses">Eyebrows</Nav.Link>
                  <Nav.Link href="#homea">Hair</Nav.Link>
                  <Nav.Link href="#h">Mouth</Nav.Link>
                  <Nav.Link href="#hom">Skin</Nav.Link>
                  <Nav.Link href="#link">Wardrobe</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        )
    }
}

export default CustomizeNav;

