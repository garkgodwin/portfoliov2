import React from 'react';

//?STYLES
import './Title.css';

const Title = ({ cName, text }) => {
	return <div className={'Title ' + cName}>{text}</div>;
};

export default Title;
