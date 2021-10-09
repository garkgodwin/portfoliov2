import React from 'react';

//?STYLES
import './LinkButton.css';

const LinkButton = ({ text = 'Default Text', link = '' }) => {
	return (
		<a role="button" className="LinkButton" href={link} target={link}>
			{text}
		</a>
	);
};

export default LinkButton;
