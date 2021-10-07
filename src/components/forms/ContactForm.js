import React, { useState } from 'react';

//?STYLES
import './ContactForm.css';

//?COMPONENTS
import FormButton from '../buttons/FormButton';
import InputText from '../inputs/InputText';
import InputArea from '../inputs/InputArea';

const ContactForm = () => {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [content, setContent] = useState('');
	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	const handleClearAll = (e) => {
		e.preventDefault();
		setFullName('');
		setEmail('');
		setSubject('');
		setContent('');
	};
	return (
		<form onSubmit={handleSubmit} className="ContactForm">
			<InputText
				text={fullName}
				setText={setFullName}
				labelValue="Full Name"
				placeholder="Your true name."
			/>
			<InputText
				text={email}
				setText={setEmail}
				labelValue="Email Address"
				placeholder="Your email."
			/>
			<InputText
				text={subject}
				setText={setSubject}
				labelValue="Email Subject"
				placeholder="Your email's subject."
			/>
			<InputArea
				text={content}
				setText={setContent}
				labelValue="Email Content"
				placeholder="Your email's content."
			/>
			<div className="cf-buttons">
				<FormButton text="Clear All" handleClick={handleClearAll} />
				<FormButton text="Send Email" type="submit" />
			</div>
		</form>
	);
};

export default ContactForm;
