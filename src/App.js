import React, { Component } from 'react';
import './App.css';
import Scrollspy from 'react-scrollspy';
import Header from './Components/Header/Header'
import Profile from './Components/Profile/Profile';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import styles from './App.css'

class App extends Component {
  render() {
    return(
			<div>
				<section id="home"><Header /></section>
				<section id="profile"><Profile /></section>
				<section id="skills"><Skills /></section>
				<section id="portfolio"><Portfolio /></section>
				<section id="contact"><Contact /></section>
			</div>
		)
  }
}

export default App;
