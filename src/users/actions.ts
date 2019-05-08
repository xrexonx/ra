import { User } from "../_definitions/data";

export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersBegin = (loading: boolean) => ({
    type: FETCH_USERS_BEGIN,
    payload: { loading }
});

export const fetchUsersSuccess = (users: User[]) => ({
    type: FETCH_USERS_SUCCESS,
    payload: { users }
});

export const fetchUsersFailure = (error: any) => ({
    type: FETCH_USERS_FAILURE,
    payload: { error }
});