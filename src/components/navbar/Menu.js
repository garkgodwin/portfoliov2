import React from 'react';
import { NavLink } from 'react-router-dom';

//?STYLES
import './Menu.css';

const Menu = ({ menuShow, isTop }) => {
	let cName = menuShow ? 'Menu ' : 'Menu menu-gone ';
	cName = cName + (isTop ? 'menu-top' : '');
	return (
		<div className={cName}>
			<NavLink
				className="menu-item"
				activeClassName="menu-item active"
				exact
				to="/">
				<span className="mi-extra"></span>
				<span className="mi-text">Home</span>
			</NavLink>
			<NavLink
				className="menu-item"
				activeClassName="menu-item active"
				exact
				to="/about">
				<span className="mi-extra"></span>
				<span className="mi-text">About</span>
			</NavLink>
			<NavLink
				className="menu-item"
				activeClassName="menu-item active"
				exact
				to="/projects">
				<span className="mi-extra"></span>
				<span className="mi-text">Projects</span>
			</NavLink>
			<NavLink
				className="menu-item"
				activeClassName="menu-item active"
				exact
				to="/contact">
				<span className="mi-extra"></span>
				<span className="mi-text">Contact</span>
			</NavLink>
		</div>
	);
};

export default Menu;
