import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './header.styles.css';

const Header = () => {
  return (
    <div>
      <Navbar fixed={'top'} className="navbar-div-style" expand="lg">
        <Navbar.Brand className="header-logo" href="/">URBAN FISHING</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav> */}
      </Navbar>
    </div>
  )
}

export default Header;