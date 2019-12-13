import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import {
    logoutSaga,
    authUserSaga
} from './auth';

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_USER, authUserSaga)
    ]);
}