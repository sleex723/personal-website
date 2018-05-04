import React from 'react';
import styles from './Profile.css';
import SamProfile from '../../img/sampf.jpeg';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import { Image } from 'react-bootstrap';

const profile = (props) => {
  return <div className={styles.Profile}>
			<div className={styles.Header}>
				<div className={styles.ProfileText}>Profile</div>
				<div className={styles.Description}>I'm a full-stack developer</div>
			</div>
			<hr />
			<div className={styles.ProfileBody}>
				<Image src={SamProfile} circle responsive />
				<div className={styles.About}>
					<div className={styles.AboutTitle}>About Me</div>
					<div className={styles.AboutDesc}>
						I love solving problems and working on applications that make a difference in the world. I am
						a full-stack engineer with a strong background in JavaScript. I also have extensive experience
						with React, Redux, Redux-Saga, CSS Grid/Flexbox, Node.js/Express and PostgresQL.
					</div>
					<br />
					<div className={styles.Social}>
            <img src={Github} />
            <img src={LinkedIn} />
					</div>
				</div>
			</div>
		</div>;
}

export default profile