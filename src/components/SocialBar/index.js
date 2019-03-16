import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// TODO: consider https://codesandbox.io/s/q89onw1kqq to hadnle icons
const NavBarComponent = () => (
  <Navbar bg="light" expand>
    <Nav
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar>
);

export default NavBarComponent;
