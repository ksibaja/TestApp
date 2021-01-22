import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Topnavbar.module.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Topnavbar extends React.Component {
  render() {
    return (
      <div>    {/*{styles.Topnavbar}*/}
        <Navbar className={styles.Topnavbar} collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

Topnavbar.propTypes = {};

Topnavbar.defaultProps = {};

export default Topnavbar;
