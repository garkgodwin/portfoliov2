import React from 'react';

//?STYLES
import './Toggler.css';

const Toggler = ({ cName, handleClick, icon }) => {
	return (
		<button className={'Toggler ' + cName} onClick={handleClick}>
			{icon}
		</button>
	);
};

export default Toggler;
