import {
    combineReducers
} from 'redux';
import {
    routerReducer
} from 'react-router-redux';
import loginReducer from './Authentication/loginReducer';


export const makeRootReducer = asyncReducers =>
    combineReducers({
        ...asyncReducers,
        routing: routerReducer,
        loginReducer
    });

export default makeRootReducer;