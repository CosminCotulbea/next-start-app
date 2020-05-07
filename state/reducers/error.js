import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default (state = initialState.error, action) => {
    switch (action.type) {
        case types.SET_ERROR:
            state = action.payload;
            break;
    }

    return state;
};
