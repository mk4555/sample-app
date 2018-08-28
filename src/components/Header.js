import React, { Component } from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
class Header extends Component {
  render() {
    return(
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                About Min
              </NavItem>
              <NavItem eventKey={2} href="#">
                Projects
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>;
      </div>
    )
  }
}

export default Header
