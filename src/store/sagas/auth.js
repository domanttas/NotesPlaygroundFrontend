import * as actionTypes from '../actions/actionTypes';
import axios from '../../http/auth';

import { put, call, delay } from 'redux-saga/effects';

export function* logoutSaga(action) {
    yield call([localStorage, 'removeItem'], 'token');
    yield call([localStorage, 'removeItem'], 'userId');

    yield put({
        type: actionTypes.AUTH_LOGOUT
    });
}

export function* authUserSaga(action) {
    let url = null;
    if (action.isSignUp) {
        url = '';
    } else {
        url = 'login';
    }

    yield put({
        type: actionTypes.AUTH_START
    });

    try {
        const response = yield axios.post(url, action.authData);

        yield call([localStorage, 'setItem'], 'userId', response.data.user._id);
        yield call([localStorage, 'setItem'], 'token', response.data.token);

        yield put({
            type: actionTypes.AUTH_SUCCESS,
            userId: response.data.user.userId,
            token: response.data.token
        });
    } catch (error) {
        yield put({
            type: actionTypes.AUTH_FAILED,
            error: 'Authentication failed'
        });
    }
}