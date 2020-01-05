import {combineReducers} from 'redux';

import user from './user';
import error from './error';

const reducers = {
    user,
    error
};

export default combineReducers(reducers);
