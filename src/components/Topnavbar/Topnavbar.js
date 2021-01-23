import React from 'react';
// import PropTypes from 'prop-types';
import './Topnavbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Topnavbar extends React.Component {
  render() {
    return (
      <div>    {/*{styles.Topnavbar}*/}
        <Navbar className="Topnavbar" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="/main">Home</Navbar.Brand>
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
      </div>
    )
  }
}

Topnavbar.propTypes = {};

Topnavbar.defaultProps = {};

export default Topnavbar;
