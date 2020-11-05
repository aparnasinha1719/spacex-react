import classes from './Button.module.css';
import React from 'react';

function Button(props) {
	return (
		<button
			className={`${classes.filterBtn}  ${
				props.activeValue === props.children.toLowerCase() ? classes.active : ''
			}`}
			onClick={props.btnChange}
		>
			{props.children}
		</button>
	);
}

export default Button;
