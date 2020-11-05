import classes from './Footer.module.css';
import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer className={classes.footer}>
				<span>Developed By:</span> Aparna Sinha
			</footer>
		);
	}
}

export default Footer;
