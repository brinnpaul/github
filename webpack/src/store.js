import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// Reducers
import reducers from './reducer';
// middleware 
import api from './middleware';

// Initial State
const INITIAL_STATE = {};

// Create Store
const store = createStore(reducers, INITIAL_STATE, composeWithDevTools(
    applyMiddleware(...[api])
));

export default store;
