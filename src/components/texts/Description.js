import React from 'react';

//?STYLES
import './Description.css';

const Description = ({ cName, text }) => {
	return <div className={'Description ' + cName}>{text}</div>;
};

export default Description;
