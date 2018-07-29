import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';
import {
    apiMiddleware
} from 'redux-api-middleware';
import {
    createBrowserHistory
} from 'history';
import {
    routerMiddleware
} from 'react-router-redux';

import {
    makeRootReducer
} from './rootReducer';

export default (initialState = {}) => {
    const history = createBrowserHistory();

    // ======================================================
    // Middleware Configuration
    // ======================================================

    const middleware = [
        apiMiddleware,
        routerMiddleware(history),
    ];

    // ======================================================
    // Store Enhancers
    // ======================================================
    const enhancers = [];

    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
    const store = createStore(
        makeRootReducer(),
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
    store.asyncReducers = {};

    return store;
};