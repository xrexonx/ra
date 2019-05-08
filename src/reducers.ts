import { combineReducers } from 'redux';
import userReducer from "./users/reducer";

const appReducers = {
    user: userReducer,
};

export default combineReducers(appReducers);