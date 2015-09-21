import * as types from './types';

export function addPost({ id, title, body, author, created_at }) {
	return {
		type: types.POST_ADD,
		post: { id, title, body, author, created_at }
	};
}

export function remPost(id) {
	return {
		type: types.POST_REM,
		id
	};
}

export function toggleAddPostForm() {
	return {
		type: types.FORM_ADDPOST_TOGGLE
	};
}

export function fetchStart() {
	return {
		type: types.IS_FETCHING
	};
}

export function fetchComplete() {
	return {
		type: types.FETCH_COMPLETE
	};
}

export function fetchPosts() {
	
}