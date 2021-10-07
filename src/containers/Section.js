import React from 'react';

//?STYLES
import './Section.css';

const Section = (props) => {
	return <div className={'Section ' + props.cName}>{props.children}</div>;
};

export default Section;
