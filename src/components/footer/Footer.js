import React from 'react';

//?STYLES
import './Footer.css';

//?IMAGES
import { ReactComponent as Phone } from '../../images/footer/contact-phone.svg';
import { ReactComponent as Mail } from '../../images/footer/contact-mail.svg';
import { ReactComponent as Location } from '../../images/footer/contact-location.svg';

const Footer = () => {
	return (
		<footer className="Footer">
			<h4>Gark Godwin Duque</h4>
			<div className="f-contact">
				<div className="f-item">
					<Phone className="fi-icon" />

					<a href="#" className="fi-text fi-link">
						+63 936 210 1653
					</a>
				</div>
				<div className="f-item">
					<Mail className="fi-icon" />
					<a href="#" className="fi-text fi-link">
						garkgodwinduque@gmail.com
					</a>
				</div>
				<div className="f-item f-location">
					<Location className="fi-icon" />
					<a
						href="https://www.google.com/maps/place/Sayre+Hwy,+Maramag,+Bukidnon/@7.749191,125.0073471,18.75z/data=!4m5!3m4!1s0x32ff3b12c38f1bdf:0x7f491477fa14855f!8m2!3d7.7491857!4d125.0075892"
						target="https://www.google.com/maps/place/Sayre+Hwy,+Maramag,+Bukidnon/@7.749191,125.0073471,18.75z/data=!4m5!3m4!1s0x32ff3b12c38f1bdf:0x7f491477fa14855f!8m2!3d7.7491857!4d125.0075892"
						className="fi-text fi-link">
						Sayre Hwy, Maramag, Bukidnon
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
