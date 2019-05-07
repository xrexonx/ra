import { combineReducers } from 'redux';
import userReducer from "./users/reducer";

const appReducers = {
    users: userReducer,
};

export default combineReducers(appReducers);