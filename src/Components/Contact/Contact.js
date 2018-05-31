import React, { Component } from 'react';
import styles from './Contact.css';
import { form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class Contact extends Component {

  state = {
    name: '',
    email: '',
    message: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })

    console.log(this.state);
  }

  render() {
    return (
      <div className={styles.Background}>
        <div className={styles.Contact}>
          <div className={styles.Header}>
            <div className={styles.Title}>Contact</div>
            <div className={styles.Desc}>Here are my contact details</div>
          </div>
          <hr/>
          <div className={styles.Info}>samlee723@gmail.com</div>
          <div className={styles.Info}>(909) 723-7449</div>
          <div className={styles.Info}>Los Angeles, CA</div>
          <hr/>
          <div>
            <div className={styles.Social}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact