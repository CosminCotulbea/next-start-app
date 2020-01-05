// import {SET_USER, SET_USER_ERRORS} from '../actions/user';
export const SET_USER = '@set-user';
export const SET_USER_ERRORS = '@set-user-errors';

export default (state = {
    user: false,
    errors: false,
    loading: true
}, action) => {
    switch (action.type) {
        case SET_USER:
            if (action.payload) {
                state = {...state, user: Object.assign({}, action.payload)};
            } else {
                state = {...state, user: false};
            }
            break;
        case SET_USER_ERRORS:
            if (action.payload) {
                state = {...state, errors: Object.assign({}, action.payload)};
            } else {
                state = {...state, errors: false};
            }
            break;
    }

    return state;
};