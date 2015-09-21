import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleAddPostForm } from '../redux/actions';

class FormToggleNavButton extends Component {
	render() {
		return (
			<div className="navbar-item" onClick={this.props.onClick}>
				<svg height="50" version="1.1" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="-15 -15 94 94" id="add-or-close-button" className={this.props.shouldShowAddPostForm ? 'open' : ''}>
					<g>
						<circle fill="none" stroke="#fff" strokeWidth="5" cx="32" cy="32" r="40"/>
						<path fill="none" stroke="#fff" strokeWidth="5" d="m 32,4.962098 0,53.893986" transform="matrix(1,0,0,1,0,0)"></path>
						<path fill="none" stroke="#fff" strokeWidth="5" d="m 5.1127494,31.909091 53.8342436,0" transform="matrix(1,0,0,1,0,0)"></path>
					</g>
				</svg>
			</div>
		);
	}
}

class Navbar extends Component {
	render() {
		var { dispatch, shouldShowAddPostForm } = this.props;

		return (
			<nav className="navbar">
				<FormToggleNavButton shouldShowAddPostForm={shouldShowAddPostForm} onClick={(e) => dispatch(toggleAddPostForm())}/>
			</nav>
		);
	}
}


export default connect(state => state)(Navbar);