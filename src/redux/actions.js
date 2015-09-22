import * as types from './types';
import fbRef from '../firebaseRef';

function addPost({ id, title, body, author, created_at }) {
	return {
		type: types.POST_ADD,
		post: { id, title, body, author, created_at }
	};
}


function addPosts(posts) {
	return {
		type: types.POSTS_ADD,
		posts
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

export function	requestPosts() {
	return {
		type: types.IS_FETCHING
	};
}

export function pushPost(post) {
	return dispatch => {
		dispatch(requestPosts())
		fbRef.push(post, (err) => {
			err ? console.error(err) : dispatch(addPost(post)) 
		});
	};
}

export function fetchAllPosts() {
	return dispatch => {
		dispatch(requestPosts());
		fbRef.once('value', (snapshot) => {
			var posts = snapshot.val();
			dispatch(addPosts(posts));
		});
	} 
}