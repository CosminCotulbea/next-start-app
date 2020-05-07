import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default (state = initialState.user, action) => {
    switch (action.type) {
        case types.SET_USER:
            if (action.payload) {
                state = {...state, user: Object.assign({}, action.payload)};
            } else {
                state = {...state, user: false};
            }
            break;
        case types.SET_USER_ERRORS:
            if (action.payload) {
                state = {...state, errors: Object.assign({}, action.payload)};
            } else {
                state = {...state, errors: false};
            }
            break;
    }

    return state;
};
