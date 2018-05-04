import React from 'react';
import styles from './Profile.css';

const profile = (props) => {
  return (
    <div className={styles.Profile}>
      <div className={styles.Header}>
        Profile
      </div>
      <div className={styles.Description}>
        I'm a full-stack developer
      </div>
    </div>
  )
}

export default profile