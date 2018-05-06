import React, { Component } from 'react';
import styles from './Portfolio.css';
import Narwhal from '../../img/Narwhal.png';
import Basicly from '../../img/Basicly.png';
import Github from '../../img/github1.png';
import Website from '../../img/website.png';
import FoodFinder from '../../img/foodf.png';

class Portfolio extends Component {
  state = {}

  render() {
    return <div className={styles.Portfolio}>
			<div className={styles.Header}>
				<div className={styles.Title}>Portfolio</div>
				<div className={styles.Desc}>Applications that I built</div>
			</div>
			<hr />
			<div className={styles.Applications}>
				<div className={styles.AppRow}>
					<div className={styles.container}>
						<img src={Narwhal} alt="Avatar" className={styles.image} />
						<div className={styles.overlay}>
							<div className={styles.text}>
								<div className={styles.textHeader}>Narwhal</div>
								<hr />
								<div>
									A real-time chat application where you can join communities and talk about common interests.
									<br />
									<br />
									<strong>
										Tech stack:
									</strong> React, Redux, Redux-Saga, Node.js, Express.js, Socket.IO, Postgres, and more.
								</div>
								<div className={styles.Social}>
									<a href="https://github.com/narwhal-chat" target="_blank">
										<img className={styles.Icon} src={Github} />
									</a>
									<a href="http://narwhal-chat-prod.herokuapp.com/" target="_blank">
										<img className={styles.Icon} src={Website} />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.container}>
						<img src={Basicly} alt="Avatar" className={styles.image} />
						<div className={styles.overlay}>
							<div className={styles.text}>
								<div className={styles.textHeader}>Basicly</div>
								<hr />
								<div>
									An application for teams to collaborate on completing tasks.
									<br />
									<br />
									<strong>Tech stack:</strong> React, Node.js, Express.js, and Postgres.
								</div>
								<div className={styles.Social}>
									<a href="https://github.com/basicly/basicly" target="_blank">
										<img className={styles.Icon} src={Github} />
									</a>
									<a href="https://basicly.herokuapp.com/" target="_blank">
										<img className={styles.Icon} src={Website} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.AppRow}>
					<div className={styles.container}>
						<img src={FoodFinder} alt="Avatar" className={styles.image} />
						<div className={styles.overlay}>
							<div className={styles.text}>
								<div className={styles.textHeader}>Food Finder</div>
								<hr />
								<div>
									An application to help you decide what to eat. (Currently refactoring old code)
									<br />
									<br />
									<strong>
										Tech stack:
									</strong> React, Node.js, Express.js, Yelp API, and Firebase Database.
								</div>
								<div className={styles.Social}>
									<a href="https://github.com/sleex89/food-finder" target="_blank">
										<img className={styles.Icon} src={Github} />
									</a>
									<a href="https://foodfindapp.herokuapp.com/" target="_blank">
										<img className={styles.Icon} src={Website} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>;
  }
}

export default Portfolio