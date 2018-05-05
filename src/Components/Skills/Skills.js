import React from 'react';
import styles from './Skills.css';

const skills = (props) => {
  return(
    <div className={styles.Background}>
      <div className={styles.SkillsContainer}>
        <div className={styles.Title}>
          Skills
        </div>
        <div className={styles.Desc}>
          Things that i'm good at
        </div>
        <hr/>
      </div>
      <hr/>

    </div>
  )
}

export default skills;