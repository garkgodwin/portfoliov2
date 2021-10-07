import React from 'react';

//?STYLES
import './FormButton.css';

const Formbutton = ({ text, type = null, handleClick = null }) => {
	return (
		<button type={type} className="FormButton" onClick={handleClick}>
			{text}
		</button>
	);
};

export default Formbutton;
