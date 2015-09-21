import React, { Component, findDOMNode } from 'react';

export default class AddPostForm extends Component {
	componentDidMount() {
		findDOMNode(this.refs.title).focus();
	}
	
	serializeForm() {
		var title = findDOMNode(this.refs.title).value;
		var author = findDOMNode(this.refs.author).value;
		var body = findDOMNode(this.refs.body).value;
		var created_at = new Date;
		return { title, author, body, created_at };
	}

	render() {
		return (
			<form className="add-post-form" onSubmit={(e) => {
				e.preventDefault();
				this.props.onSubmit(this.serializeForm())
			}}>
				<div className="form-group">
					<label>title</label>
					<input type="text" ref="title"/>
				</div>
				<div className="form-group">
					<label>as</label>
					<input type="text" ref="author"/>
				</div>
				<div className="form-group">
					<label>content</label>
					<textarea cols="20" rows="10" ref="body"></textarea>
				</div>
				<button type="submit">SUBMIT</button>
			</form>
		)
	}
}