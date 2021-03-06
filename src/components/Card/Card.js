import React from 'react';
import classes from './Card.module.css';
import spaceImg from '../../assets/images/falcon.png';
function Card(props) {
	return (
		<section className={classes.cardSection}>
			<div className={classes.cardWrapper}>
				{props.loading ? (
					<p className={classes.loadingText}>{props.loading}</p>
				) : (
					props.missions.map((mission, key) => (
						<div className={classes.card} key={key}>
							{/* <img src={mission.links.mission_patch} />  */}
							<img src={spaceImg} alt="img-spacex" />
							<h6 className={classes.missionName}>
								{mission.mission_name} #{mission.flight_number}
							</h6>
							<div className={classes.missionDetails}>
								<h6>Mission Ids: {mission.mission_id.length === 0 ? <span>N/A</span> : null}</h6>
								{mission.mission_id.length > 0 ? (
									<ul>
										{mission.mission_id.map((id, key) => (
											<li key={key}>{id}</li>
										))}
									</ul>
								) : null}
								<div className={classes.row}>
									<div className={`${classes.colAuto} ${classes.heading}`}>Launch Year:</div>
									<div className={`${classes.colHalf} ${classes.text}`}>{mission.launch_year}</div>
								</div>
								<div className={classes.row}>
									<div className={`${classes.colAuto} ${classes.heading}`}>Successful Launch:</div>
									<div className={`${classes.colHalf} ${classes.text}`}>
										{mission.launch_success !== null ? mission.launch_success.toString() : 'N/A'}
									</div>
								</div>
								<div className={classes.row}>
									<div className={`${classes.colAuto} ${classes.heading}`}>Successful Landing:</div>
									<div className={`${classes.colHalf} ${classes.text}`}>
										{mission.rocket.first_stage.cores[0].land_success !== null
											? mission.rocket.first_stage.cores[0].land_success.toString()
											: 'N/A'}
									</div>
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</section>
	);
}

export default Card;
