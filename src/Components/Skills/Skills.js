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
					<div>
						<div className={styles.SkillTitle}>Frontend</div>
						<div className={styles.Skill}>
							<div>Javascript</div>
							<div className={styles.Stars}>
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
								<span class="glyphicon glyphicon-star" />
							</div>
						</div>
					</div>
					<div className={styles.Backend} />
				</div>
			</div>
		</div>;
}

export default skills;