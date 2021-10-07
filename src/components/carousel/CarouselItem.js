import React from 'react';

//?STYLES
import './CarouselItem.css';

const CarouselItem = ({ item }) => {
	return (
		<div className={'CarouselItem ' + item.cName}>
			<div className="ci-abs">{item.image}</div>
			<hr className="ci-space" />
			<h3 className="ci-title">{item.title}</h3>
			<p className="ci-description">{item.description}</p>
			<hr className="ci-space" />

			<a href={item.link} target={item.link} className="ci-link">
				{item.linkText}
			</a>
		</div>
	);
};

export default CarouselItem;
