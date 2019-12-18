import * as actionTypes from '../actions/actionTypes';

const initialState = {
    notes: [],
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.NOTES_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_NOTES_SUCCESS:
            return {
                ...state,
                notes: action.notes,
                error: null,
                loading: false
            };
        case actionTypes.NOTES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case actionTypes.NOTE_REMOVE:
            return {
                ...state,
                notes: state.notes.filter(note => note._id !== action.id),
                loading: false
            };
        case actionTypes.NOTE_CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        case actionTypes.SAVE_NOTE:
            return {
                ...state,
                notes: [action.note].concat(...state.notes),
                error: null,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;