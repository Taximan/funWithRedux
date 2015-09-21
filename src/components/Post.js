import React, { Component } from 'react';
import moment from 'moment';

export default class Post extends Component {
	render() {
		var created_at = moment(this.props.created_at).format('MMMM Do YYYY');
		var fromNow = moment(this.props.created_at).fromNow();

		return (
			<li>
				<header>
					<h3>{this.props.title}</h3>
					<h6>by {this.props.author} at {created_at} <span className="relativetime">({fromNow})</span></h6>
				</header>
				<p>
					{this.props.body}
				</p>
				{!this.props.isLast &&
					<hr />
				}
			</li>
		);
	}
}
