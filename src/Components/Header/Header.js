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
              Profile
            </NavItem>
            <NavItem eventKey={2} href="#">
              Skills
            </NavItem>
            <NavItem eventKey={3} href="#">
              Portfolio
            </NavItem>
            <NavItem eventKey={4} href="#">
              Contact
            </NavItem>
          </Nav>
        </Navbar>
        <Jumbotron className={styles.banner}>
            <div className={styles.BannerName}>Samuel Lee</div>
            <div className={styles.BannerTitle}>Software Engineer</div>
        </Jumbotron>
      </div>
    )
  }
}

export default Header