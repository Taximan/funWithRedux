import React, { Component } from 'react';

import Post from './Post';

export default class Posts extends Component {
	render() {
		var posts = this.props.posts.map((post, index) => {
			return <Post key={post.id} {...post} isLast={this.props.posts.length - 1 === index} />
		});

		return (
			<ul className="posts">
				{posts}
			</ul>
		);
	}
}
