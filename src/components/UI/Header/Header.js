import classes from './Header.module.css';
import React from 'react';

function Header() {
	return (
		<header className={classes.header}>
			<h3>SpaceX Launch Program</h3>
		</header>
	);
}

export default Header;
