import React, { Component, Fragment } from 'react';
import axios from 'axios';

import classes from './Home.module.css';
import { baseUrl } from '../../util/connection/connection';
import Footer from '../../components/UI/Footer/Footer';
import Header from '../../components/UI/Header/Header';
import Aside from '../../components/Aside/Aside';
import Card from '../../components/Card/Card';

export class Home extends Component {
	constructor() {
		super();
		this.state = {
			mission: [],
			loading: 'Loading...',
		};
	}

	getMissions = (query) => {
		axios
			.get(baseUrl + query)
			.then((response) => {
				if (response.data.length === 0) {
					this.setState({ loading: 'No Data Found' });
				} else {
					this.setState({ mission: response.data, loading: '' });
				}
			})
			.catch((err) => {
				this.setState({ loading: err.message });
			});
	};
	render() {
		return (
			<Fragment>
				<Header></Header>
				<div className={classes.contentContainer}>
					<Aside getMissions={this.getMissions}></Aside>
					<Card missions={this.state.mission} loading={this.state.loading}></Card>
				</div>
				<Footer></Footer>
			</Fragment>
		);
	}
}

export default Home;
