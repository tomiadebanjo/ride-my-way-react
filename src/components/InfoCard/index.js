import React from 'react';

const InfoCard = (props) => {
	const { text, img } = props
	return (
		<div>
			<div>
				<img src={img} alt={text}/>
			</div>
			<h4>{text}</h4>
		</div>
	);
};

export default InfoCard;
