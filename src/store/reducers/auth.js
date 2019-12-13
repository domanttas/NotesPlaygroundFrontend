import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    isAuthenticated: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.AUTH_CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                token: action.token,
                userId: action.userId,
                isAuthenticated: true
            };
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false,
                isAuthenticated: false
            };
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                userId: null,
                token: null
            };
        default:
            return state;
    }
};

export default reducer;