import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Jumbotron } from 'react-bootstrap'
import Scrollspy from 'react-scrollspy';
import Profile from '../Profile/Profile';

import styles from './Header.css'

class Header extends Component {

  render() {
    return(
      <div>
        <Scrollspy items={ ['profile', 'skills'] } currentClassName="is-current">
          <Navbar fixedTop>
            <Nav pullRight>
              <NavItem href="#profile">
                Profile
              </NavItem>
              <NavItem ieventKey={2} href="#skills">
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
        </Scrollspy>
        <Jumbotron className={styles.banner}>
            <div className={styles.BannerName}>Samuel Lee</div>
            <div className={styles.BannerTitle}>Software Engineer</div>
        </Jumbotron>
      </div>
    )
  }
}

export default Header