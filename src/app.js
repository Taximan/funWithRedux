import React, { Component } from 'react';
import ReactWithAddons from 'react/addons';
import { connect } from 'react-redux';

import Container from './components/Container';
import Posts from './components/Posts';
import Navbar from './components/Navbar';
import AddPostForm from './components/AddPostForm';

import { addPost,  toggleAddPostForm } from './redux/actions';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleAddPostFormSubmit = this.handleAddPostFormSubmit.bind(this);
	}

	handleAddPostFormSubmit(formData) {
		this.props.dispatch(addPost(formData));
		this.props.dispatch(toggleAddPostForm());
	}

	render() {
		var { posts, shouldShowAddPostForm, dispatch } = this.props;
		var content;

		if(shouldShowAddPostForm) {
			content = <AddPostForm onSubmit={this.handleAddPostFormSubmit}/>
		} else {
			content = <Posts posts={posts} />
		}

		return (
			<div>
				<Navbar />
				<Container>
					{content}
				</Container>
			</div>
		);
	}
}



export default connect(state => state)(App);