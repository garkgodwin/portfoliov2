import React from 'react';

//?STYLES
import './InputArea.css';

const InputArea = ({ text, setText, labelValue, placeholder }) => {
	return (
		<div className="InputArea">
			<label className="ia-label">
				<strong>{labelValue}</strong>
			</label>
			<textarea
				cols={40}
				rows={5}
				className="ia-input"
				placeholder={placeholder}
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
		</div>
	);
};

export default InputArea;
