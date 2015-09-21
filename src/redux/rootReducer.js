import { fromJS } from 'immutable';
import * as types from './types';

const intialState = {
	posts: [],
	shouldShowAddPostForm: false,
};


function posts(state = intialState.posts, action) {
	switch(action.type) {
		case types.POST_ADD:
			return fromJS(state).push(action.post).toJS();
		case types.POST_REM:
			return fromJS(state).delete(action.id);
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