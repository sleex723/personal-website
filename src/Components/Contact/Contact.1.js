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
            <div className={styles.Desc}>You can send me a message here</div>
          </div>
          <hr/>
          <form className={styles.Form}>
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <ControlLabel>E-mail Address</ControlLabel>
            <FormControl
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <ControlLabel>Message</ControlLabel>
            <FormControl
              componentClass="textarea"
              type="text"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <button type="submit" className={styles.Button}>Send</button>
          </form>
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