import React from 'react';

//?STYLES
import './Image.css';

const Image = ({ cName, src, alt }) => {
	return (
		<div className={'Image ' + cName}>
			<img src={src} alt={alt} />
		</div>
	);
};

export default Image;
