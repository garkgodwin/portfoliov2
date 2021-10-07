import React from 'react';

//?STYLES
import './Contact.css';

//?COMPONETS
import ContactForm from '../../components/forms/ContactForm';

const Contact = () => {
	return (
		<div className="Contact">
			<div className="c-left c-box">
				<p className="c-sub">Contact Me</p>
				<h1 className="c-title">Let's talk!</h1>
			</div>
			<div className="c-right c-box">
				<ContactForm />
			</div>
		</div>
	);
};

export default Contact;
