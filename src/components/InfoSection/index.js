import React from 'react';
import InfoCard from '../InfoCard';
import InfoData from './InfoData';
import classes from './style.scss'

const InfoSection = () => {
	console.log(InfoData);
	const mappedInfoSection = InfoData.map((item) => {
		const { id, text, img } = item
		return (
			<InfoCard
				key={id}
				text={text}
				img={img}
			/>
		)
	})

	return (
		<div className={classes.infoSection}>
			<h2>HOW IT WORKS</h2>
			<div className={classes.row}>
				{mappedInfoSection}
			</div>
		</div>
	)
}

export default InfoSection;
