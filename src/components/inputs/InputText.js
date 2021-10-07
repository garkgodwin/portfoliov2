import React from 'react';

//?STYLES
import './InputText.css';

const InputText = ({ text, setText, labelValue, placeholder }) => {
	return (
		<div className="InputText">
			<label className="it-label">
				<strong>{labelValue}</strong>
			</label>
			<input
				className="it-input"
				type="text"
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default InputText;
