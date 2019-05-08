import { Action } from 'redux-actions'
import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from "./actions";
import { combineReducers } from "redux";

const isLoading = (state = false, action: Action<any>) => {
    if (action.type === FETCH_USERS_BEGIN) {
        return action.payload.loading;
    }
    return state;
};

const items = (state = [], action: Action<any>) => {
    if (action.type === FETCH_USERS_SUCCESS) {
        return action.payload.users;
    }
    return state;
};

const errors = (state = null, action: Action<any>) => {
    if (action.type === FETCH_USERS_FAILURE) {
        return action.payload.error;
    }
    return state;
};

const userReducers = {
    isLoading,
    items,
    errors
};

export default combineReducers(userReducers);