import * as actionTypes from '../actions/actionTypes';
import axios from '../../http/note';

import { put } from 'redux-saga/effects';

export function* addNoteSaga(action) {
    yield put({
        type: actionTypes.NOTES_START
    });

    const token = yield localStorage.getItem('token');

    const config = {
        headers: {
            'Authorization': "Bearer " + token
        }
    };

    try {
        const response = yield axios.post('', action.note, config);

        yield put({
            type: actionTypes.SAVE_NOTE,
            note: response.data
        });
    } catch (error) {
        yield put({
            type: actionTypes.NOTES_FAILED,
            error: {
                message: 'Failed to save note'
            }
        });
    }
}

export function* removeNoteSaga(action) {
    yield put({
        type: actionTypes.NOTES_START
    });

    const token = yield localStorage.getItem('token');

    const config = {
        headers: {
            'Authorization': "Bearer " + token
        }
    };

    try {
        const response = yield axios.delete(action.id, config);

        yield put({
            type: actionTypes.NOTE_REMOVE,
            id: action.id
        });
    } catch (error) {
        yield put({
            type: actionTypes.NOTES_FAILED,
            error: {
                message: 'Failed to delete note'
            }
        });
    }
}

export function* fetchNotesSaga(action) {
    yield put({
        type: actionTypes.NOTES_START
    });

    const token = yield localStorage.getItem('token');

    const config = {
        headers: {
            'Authorization': "Bearer " + token
        }
    };

    try {
        const response = yield axios.get('', config);

        yield put({
            type: actionTypes.FETCH_NOTES_SUCCESS,
            notes: response.data
        });
    } catch (error) {
        yield put({
            type: actionTypes.NOTES_FAILED,
            error: {
                message: 'Failed to fetch notes'
            }
        });
    }
}