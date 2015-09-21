export const logger = store => next => action => {
	console.log('dispatching', action);
	var result = next(action);
	console.log('next state', store.getState());
	return result;
}

export const thunk = store => next => action => {
	typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);
}