import * as types from './actionTypes';

export const setError = (payload = false) => {
    return {payload, type: types.SET_ERROR};
};

export default {
    setError
};
