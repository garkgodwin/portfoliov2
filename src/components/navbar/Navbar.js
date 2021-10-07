import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

//?STYLES
import './Navbar.css';

//?Images
import { ReactComponent as Logo } from '../../images/logo-light.svg';
import { ReactComponent as MenuToggler } from '../../images/nav/menu-toggler.svg';
import { ReactComponent as SocialToggler } from '../../images/nav/social-toggler.svg';

//?COMPONENTS
import Social from './Social';
import Toggler from '../buttons/Toggler';
import Menu from './Menu';

const Navbar = ({ isTop }) => {
	const [menuShow, setMenuShow] = useState(false);
	const [socialShow, setSocialShow] = useState(false);

	const handleMenu = (e) => {
		e.preventDefault();
		setMenuShow(!menuShow);
	};
	const handleSocial = (e) => {
		e.preventDefault();
		setSocialShow(!socialShow);
	};
	return (
		<div className={isTop ? 'Navbar navbar-top' : 'Navbar'}>
			<NavLink className="navbar-container logo-container" to="/">
				<Logo className="navbar-img-logo image" />
				<h2 className="navbar-text-logo">Gark Godwin</h2>
			</NavLink>
			<Menu menuShow={menuShow} isTop={isTop} />
			<Social socialShow={socialShow} />
			<div className="navbar-container toggler-container">
				<Toggler
					cName="toggler-social"
					handleClick={handleSocial}
					icon={<SocialToggler />}
				/>
				<Toggler
					cName="toggler-menu"
					handleClick={handleMenu}
					icon={<MenuToggler />}
				/>
			</div>
		</div>
	);
};

export default Navbar;
