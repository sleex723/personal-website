import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap'

import './Header.css'

class Header extends Component {

  render() {
    return <Navbar fixedTop>
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
		</Navbar>;
  }
}

export default Header