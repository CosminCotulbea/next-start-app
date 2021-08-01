import { all } from "redux-saga/effects";
import userSagas from 'state/user/sagas';

export default function* rootSaga() {
    const sagas = [
        ...userSagas
    ];
    yield all(sagas);
}