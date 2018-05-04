import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Jumbotron } from 'react-bootstrap'

import styles from './Header.css'

class Header extends Component {

  render() {
    return(
      <div>
        <Navbar fixedTop>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              About
            </NavItem>
            <NavItem eventKey={2} href="#">
              Skills
            </NavItem>
            <NavItem eventKey={2} href="#">
              Portfolio
            </NavItem>
            <NavItem eventKey={2} href="#">
              Contact
            </NavItem>
          </Nav>
        </Navbar>
        <div className={styles.banner}>
          <div className={styles.head}>Hello</div>
        </div>
      </div>
    )
  }
}

export default Header