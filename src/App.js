import React, { Component } from 'react';
import './App.css';
import Scrollspy from 'react-scrollspy';
import Header from './Components/Header/Header'
import Profile from './Components/Profile/Profile';
import Skills from './Components/Skills/Skills';
import styles from './App.css'

class App extends Component {
  render() {
    return(
			<div>
				<Header />
				<Profile />
				<Skills />
			</div>
		)
  }
}

export default App;
