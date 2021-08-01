import {combineReducers} from 'redux';
import user from 'state/user/reducer';
import error from 'state/error/reducer';

const reducers = {
    user,
    error
};

export default combineReducers(reducers);
