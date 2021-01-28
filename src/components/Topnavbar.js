import React from "react";
import "./styles/Topnavbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Topnavbar extends React.Component {
  componentDidMount() {
    document.body.style = `background: ${localStorage.getItem("color")};`;
  }

  render() {
    return (
      <Navbar className="Topnavbar" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/main" style={{ color: "yellowgreen" }}>
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/vehicles">
              <Nav.Link>Vehicles</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/manager">
              <Nav.Link>Manager</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Topnavbar;
