import React from 'react';

//?STYLES
import './WorflowCard.css';

const WorkflowCard = ({ data }) => {
	return (
		<div className={'WorkflowCard'}>
			<img src={data.src} alt={data.alt} className="wc-image" />
			<h3 className="wc-title">{data.title}</h3>
			<p className="wc-description">{data.description}</p>
		</div>
	);
};

export default WorkflowCard;
