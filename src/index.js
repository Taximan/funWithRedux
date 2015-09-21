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


import { addPost } from './redux/actions';


store.dispatch(addPost({
	title: 'Hello world!',
	id: 'ayylamoo',
	body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non ex odio. Ut tincidunt libero eget diam efficitur varius scelerisque non mi. In ultricies dui in pretium dignissim. Nam pulvinar imperdiet sapien eu vehicula. Proin molestie, urna sit amet volutpat faucibus, metus nisl iaculis diam, vitae ultrices eros ligula nec leo. Etiam vitae dapibus enim. Nam vel ligula elementum ligula auctor pharetra sed at massa. Pellentesque dapibus orci accumsan risus porta, a pulvinar nunc tristique. Nulla condimentum nulla at augue varius mattis. Pellentesque ut nisi nisi.',
	author: 'Dawid C.',
	created_at: new Date
 }));
