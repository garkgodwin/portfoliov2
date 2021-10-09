import React from 'react';
import { NavLink } from 'react-router-dom';

//?STYLES
import './NotFound.css';

const NotFound = () => {
	return (
		<div className="NotFound">
			<div className="nf-tit">
				<h1 className="nf nf-1">4</h1>
				<h1 className="nf nf-2">0</h1>
				<h1 className="nf nf-3">4</h1>
			</div>
			<h1 className="nf-sub">This page is not found.</h1>
			<p className="nf-desc">
				Would you like to go back to
				<NavLink className="nf-link" to="/">
					Home page
				</NavLink>
				or wait for a millenia for the developer to create this route?
			</p>
		</div>
	);
};

export default NotFound;
