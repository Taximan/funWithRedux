import { createStore, applyMiddleware } from 'redux';
import { logger, thunk } from './redux/middleware';
import appStore from './redux/rootReducer';

var createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);

var store = createStoreWithMiddleware(appStore);


import App from './app';
import React from 'react';

import { Provider } from 'react-redux';


React.render(
	<Provider store={store}>
		{()=><App />}
	</Provider>, 
document.body);


import { addPost, fetchAllPosts } from './redux/actions';


store.dispatch(fetchAllPosts());