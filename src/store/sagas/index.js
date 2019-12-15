import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import {
    logoutSaga,
    authUserSaga
} from './auth';

import {
    fetchNotesSaga,
    addNoteSaga,
    removeNoteSaga
} from './note';

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_USER, authUserSaga)
    ]);
}

export function* watchNote() {
    yield all([
        takeEvery(actionTypes.ADD_NOTE, addNoteSaga),
        takeEvery(actionTypes.FETCH_NOTES, fetchNotesSaga),
        takeEvery(actionTypes.NOTE_REMOVE_SAGA, removeNoteSaga)
    ]);
}