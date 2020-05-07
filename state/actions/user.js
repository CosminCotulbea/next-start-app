import http from '../../libs/http';
import * as types from './actionTypes';

import {setError} from "./error";

export const setUser = (payload) => {
    return {payload, type: types.SET_USER};
};

export const setUserErrors = (payload) => {
    return {payload, type: types.SET_USER_ERRORS};
};

export const loginUser = (payload = {}) => {
    return (dispatch) => {
        return http.route('login').post({...payload}).then(res => {
            if (!res.isError) {
                sessionStorage.setItem('jwt', res.data.token);

                if (payload.hasOwnProperty('remember') && payload.remember && res.data.hasOwnProperty('rememberToken')) {
                    localStorage.setItem('rememberToken', res.data.rememberToken);
                }

                dispatch(setUser(res.data.user));
                dispatch(setUserErrors(false));
            } else {
                dispatch(setUserErrors(res.errorMessage));
            }
        }).catch(error => {
            dispatch(setError(e.message));
        })
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        const rememberToken = localStorage.getItem('rememberToken');

        let logoutParams = {};

        if (rememberToken) {
            logoutParams = Object.assign({}, {rememberToken});
        }

        return http.route('logout').post(logoutParams, true).then(res => {
            if (!res.isError) {
                sessionStorage.clear();
                localStorage.removeItem('rememberToken');
                dispatch(setUser(false));
            } else {
                dispatch(setUserErrors(res.errorMessage));
            }
        }).catch(error => {
            dispatch(setError(e.message));
        });
    };
};

export const getUser = () => {
    return (dispatch) => {
        return http.route('user').get().then(res => {
            if (!res.isError) {
                dispatch(setUser(res.data));
                dispatch(setUserErrors(false));
            } else {
                dispatch(setUserErrors(res.errorMessage));
            }
        }).catch(error => {
            dispatch(setError(e.message));
        });
    };
};

export default {
    loginUser,
    logoutUser,
    setUser,
    getUser,
    setUserErrors
};
