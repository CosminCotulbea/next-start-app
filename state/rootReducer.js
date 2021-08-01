import {combineReducers} from 'redux';
import user from 'state/user/reducer';

const reducers = {
    user
};

export default combineReducers(reducers);
