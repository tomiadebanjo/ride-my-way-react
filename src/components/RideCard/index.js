import React from 'react';
import arrow from '../../assets/images/arrow.png'
import classes from './style.scss';

const RideCard = (props) => {
  const { id, destination, pickup_location, departure_date, departure_time } = props
  const formatTime = time => time.slice(0, 5);
  const formatDate = date => new Date(date)
			.toLocaleDateString()
			.replace(/[/]/g, '-');

  return <div className={classes.card}>
			<div className={classes.location_row}>
				<div className={classes.location_text}>
					<p>{pickup_location}</p>
				</div>
        <div className={classes.img_size}>
				  <img src={arrow} alt="arrow" className={classes.img}/>
        </div>
        <div className={classes.location_text}>
          <p>{destination}</p>
        </div>
			</div>
      <div className={classes.time}>
        <p>
        {formatTime(departure_time)} / {formatDate(departure_date)}
        </p>
      </div>
			<div className={classes.button}>
				<a href="">More Info</a>
			</div>
		</div>;
}

export default RideCard;
