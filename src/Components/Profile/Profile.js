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
						<a href="https://github.com/sleex89" target="_blank">
							<img className={styles.Icon} src={Github} />
						</a>
						<a href="https://www.linkedin.com/in/samuel-lee723/" target="_blank">
							<img className={styles.Icon} src={LinkedIn} />
						</a>
					</div>
				</div>
			</div>
			<hr />
			<div className={styles.Education}>
				<div className={styles.EducationTitle}>Education</div>
				<div className={styles.SchoolContainer}>
					<div>
						<div className={styles.SchoolTitle}>Hack Reactor</div>
						<div className={styles.SchoolYear}>2017-2018</div>
					</div>
					<div>
						<div className={styles.SchoolDesc}>Advanced Software Engineering Immersive Program</div>
					</div>
					<div className={styles.SchoolLoc}>San Francisco, CA</div>
				</div>
				<div className={styles.SchoolContainer}>
					<div>
						<div className={styles.SchoolTitle}>Pepperdine University</div>
						<div className={styles.SchoolYear}>2007-2012</div>
					</div>
					<div>
						<div className={styles.SchoolDesc}>International Management, Bachelor of Arts</div>
					</div>
					<div className={styles.SchoolLoc}>Malibu, CA</div>
				</div>
			</div>
		</div>;
}

export default profile