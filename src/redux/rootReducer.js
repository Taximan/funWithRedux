import { fromJS } from 'immutable';
import * as types from './types';

const intialState = {
	posts: {
		items: {},
		isFetching: false
	},
	shouldShowAddPostForm: false,
};


function posts(state = intialState.posts, action) {
	switch(action.type) {
		case types.POST_ADD:
			return fromJS(state)
				.update('items', (items) => items.set(action.post.id, {
					title: action.post.title,
					body: action.post.body,
					author: action.post.author,
					created_at: action.post.created_at				
				}))
				.set('isFetching', false)
				.toJS();
		case types.POST_REM:
			return fromJS(state).delete(action.id);
		case types.POSTS_ADD:
			return fromJS(state)
				.update('items', (items) => items.merge(action.posts))
				.set('isFetching', false)
				.toJS();
		case types.IS_FETCHING:
			return fromJS(state)
				.set('isFetching', true)
				.toJS();
		default: 
			return state;
	}
}

function shouldShowAddPostForm(state = intialState.shouldShowAddPostForm, action) {
	switch(action.type) {
		case types.FORM_ADDPOST_TOGGLE:
			return !state;
		default:
			return state;
	}
}

export default function app(state = intialState, action) {
	return {
		posts: posts(state.posts, action),
		shouldShowAddPostForm: shouldShowAddPostForm(state.shouldShowAddPostForm, action)
	};
}