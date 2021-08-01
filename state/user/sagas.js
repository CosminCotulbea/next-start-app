import { takeLatest, takeEvery, call, put } from "redux-saga/effects";
import { requestGetUser } from "./requests";
import {getUser, setError, setUser} from "./reducer";

function* handleGetUser({ payload }) {
    try {
        const { data, isError } = yield call(requestGetUser, payload);
        if (!isError) {
            yield put(setUser({ data }));
        } else {
            yield put(setError('error'));
        }
    } catch (error) {
        console.log(error);
    }
}

export default [
    takeLatest(getUser.type, handleGetUser)
]
