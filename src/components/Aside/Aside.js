import React, { useState, useEffect } from 'react';
import Button from '../UI/Button/Button';
import classes from './Aside.module.css';

function Aside(props) {
	// const [query, setQuery] = useState('');
	const [year, setYear] = useState('');
	const [successLaunch, setSuccessLaunch] = useState('');
	const [successLand, setSuccessLand] = useState('');
	const years = [
		'2006',
		'2007',
		'2008',
		'2009',
		'2010',
		'2011',
		'2012',
		'2013',
		'2014',
		'2015',
		'2016',
		'2017',
		'2018',
		'2019',
		'2020',
	];
	const toCapitalize = (value) => {
		return value.charAt(0).toUpperCase() + value.slice(1);
	};
	useEffect(() => {
		let query = '';
		if (year) {
			query = `${query}&launch_year=${year}`;
		}
		if (successLaunch) {
			query = `${query}&launch_success=${successLaunch}`;
		}
		if (successLand) {
			query = `${query}&land_success=${successLand}`;
		}
		props.getMissions(query);
	}, [year, successLaunch, successLand]);
	const btnChangeHandler = (btnType, value) => {
		if (btnType === 'year') {
			setYear(value);
		}
		if (btnType === 'successLaunch') {
			setSuccessLaunch(value);
		}
		if (btnType === 'successLand') {
			setSuccessLand(value);
		}
	};

	return (
		<section className={classes.filterSelectionWrapper}>
			<h5>Filters</h5>
			<nav>
				<p>Launch Year</p>
				<hr />
				<div className={classes.btnWrapper}>
					{years.map((value, key) => (
						<Button key={key} btnChange={() => btnChangeHandler('year', value)} activeValue={year}>
							{value}
						</Button>
					))}
				</div>
				<p>Successful Launch</p>
				<hr />
				<div className={classes.btnWrapper}>
					{['true', 'false'].map((value, key) => (
						<Button
							key={key}
							btnChange={() => btnChangeHandler('successLaunch', value)}
							activeValue={successLaunch}
						>
							{toCapitalize(value)}
						</Button>
					))}
				</div>
				<p>Successful Land</p>
				<hr />
				<div className={classes.btnWrapper}>
					{['true', 'false'].map((value, key) => (
						<Button
							key={key}
							btnChange={() => btnChangeHandler('successLand', value)}
							activeValue={successLand}
						>
							{toCapitalize(value)}
						</Button>
					))}
				</div>
			</nav>
		</section>
	);
}

export default Aside;
