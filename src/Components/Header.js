import React from 'react';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (

<Navbar bg="dark" variant="dark" expand="lg" className="d-flex align-items-center">
  <Navbar.Brand as={Link} to="/">Damian Krysiewicz</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  </Navbar.Collapse>
</Navbar>



   
  );
}

export default Header;