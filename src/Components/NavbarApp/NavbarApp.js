import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Logo from '../img/logopokemon.png'

function NavbarApp() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="125"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-d-flex flex-row-reverse bd-highlight">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Pokemones</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarApp;
