import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialStore = {};
const middleware = [thunk];
const store = createStore(
	rootReducer,
	initialStore,
	compose(applyMiddleware(...middleware))
);

export default store;
