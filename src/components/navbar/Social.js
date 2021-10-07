import React from 'react';

//?STYLES
import './Social.css';

//?IMAGES
import { ReactComponent as Github } from '../../images/nav/social-github.svg';
import { ReactComponent as Facebook } from '../../images/nav/social-facebook.svg';
import { ReactComponent as Linkedin } from '../../images/nav/social-linkedin.svg';
import { ReactComponent as StackOverflow } from '../../images/nav/social-stackoverflow.svg';

const Social = ({ socialShow }) => {
	return (
		<div className={socialShow ? 'Social' : 'Social social-gone'}>
			<a
				className="social-link"
				href="https://github.com/garkgodwin"
				target="https://github.com/garkgodwin">
				<Github className="social-icon" />
				<p className="social-tooltip">https://github.com/garkgodwin</p>
			</a>
			<a
				className="social-link"
				href="https://www.facebook.com/grakgdowin"
				target="https://www.facebook.com/grakgdowin">
				<Facebook className="social-icon" />
				<p className="social-tooltip">
					https://www.facebook.com/grakgdowin
				</p>
			</a>
			<a
				className="social-link"
				href="https://www.linkedin.com/in/garkgodwin"
				target="https://www.linkedin.com/in/garkgodwin">
				<Linkedin className="social-icon" />
				<p className="social-tooltip">
					https://www.linkedin.com/in/garkgodwin
				</p>
			</a>
			<a
				className="social-link"
				href="https://stackoverflow.com/users/13116233/gark"
				target="https://stackoverflow.com/users/13116233/gark">
				<StackOverflow className="social-icon" />
				<p className="social-tooltip">
					https://stackoverflow.com/users/13116233/gark
				</p>
			</a>
		</div>
	);
};

export default Social;
