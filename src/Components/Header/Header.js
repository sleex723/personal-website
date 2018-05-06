import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Jumbotron } from 'react-bootstrap'
import Scrollspy from 'react-scrollspy';
import Profile from '../Profile/Profile';

import styles from './Header.css'

class Header extends Component {

  render() {
    return(
      <div>
        <Scrollspy items={ ['home', 'profile', 'skills', 'portfolio', 'contact'] } currentClassName="is-current">
          <Navbar fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">Samuel Lee</a>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#profile">
                Profile
              </NavItem>
              <NavItem eventKey={2} href="#skills">
                Skills
              </NavItem>
              <NavItem eventKey={3} href="#portfolio">
                Portfolio
              </NavItem>
              <NavItem eventKey={4} href="#contact">
                Contact
              </NavItem>
            </Nav>
            </Navbar.Collapse>
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