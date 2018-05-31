import React from 'react';
import styles from './Skills.css';

const skills = (props) => {
  return <div className={styles.Background}>
			<div className={styles.SkillsContainer}>
				<div className={styles.Header}>
					<div className={styles.Title}>Skills</div>
					<div className={styles.Desc}>Things that i'm good at</div>
				</div>
				<hr />
				<div className={styles.Skills}>
					<div id="col1">
						<div className={styles.Skill}>
							<div className={styles.SkillName}>Javascript</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>HTML 5</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>CSS 3</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>React</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>React-Redux</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>Node.js</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>Express</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>Axios</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>Bootstrap</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>RESTful API</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>npm</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>git</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>CSS Flexbox</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>CSS Grid</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>Redux-Saga</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>PostgresQL</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
					</div>
					<div id="col2">
						<div className={styles.Skill}>
							<div className={styles.SkillName}>MySQL</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>Webpack</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>jQuery</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>Sass</div>
							<div className={styles.Stars}>
							<span class="glyphicon glyphicon-star" />
							<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
							<span class="glyphicon glyphicon-star-empty" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>Heroku</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>Scrum</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>Firebase</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>AngularJS</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>Jest</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>Enzyme</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>Mocha</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>Travis CI</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>MongoDB</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>AWS S3</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>SEO</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
						<div className={styles.Skill}>
							<div className={styles.SkillName}>Backbone</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star-empty" />
								<span class="glyphicon glyphicon-star-empty" />
								<span class="glyphicon glyphicon-star-empty" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>;
}

export default skills;