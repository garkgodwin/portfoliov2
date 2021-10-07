import React from 'react';

//?STYLES
import './Page.css';

const Page = (props) => {
	return <div className={'Page ' + props.cName}>{props.children}</div>;
};

export default Page;
