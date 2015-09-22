import React, { Component } from 'react';

import Post from './Post';

export default class Posts extends Component {
	render() {
		var posts = Object.keys(this.props.posts).map((key, index, keys) => {
			return <Post key={key} {...this.props.posts[key]} isLast={keys.length - 1 === index} />
		});

		return (
			<ul className="posts">
				{posts}
			</ul>
		);
	}
}
