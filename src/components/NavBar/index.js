import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBarComponent = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://firebasestorage.googleapis.com/v0/b/soy-protestante-com.appspot.com/o/images%2Flogos%2Fshield.png?alt=media&token=48d856c4-b785-4d55-89a0-cc6a8a7bbb6d"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {" Soy Protestante"}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Pagina Principal</Nav.Link>
        <Nav.Link href="#link">Acerca de Nosotros</Nav.Link>
        <NavDropdown title="Temas" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
            El evangelio y la politica
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            El amor de Dios y las catastrofes
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">
            El Cristiano y las redes sociales
          </NavDropdown.Item>
          {
            //  <NavDropdown.Divider />
            //  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          }
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBarComponent;
