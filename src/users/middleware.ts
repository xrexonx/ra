import { Dispatch } from "redux";
import {
    fetchUsersBegin,
    fetchUsersSuccess,
    fetchUsersFailure
} from "./actions";

export const usersFetchData = () => {
    return (dispatch: Dispatch) => {
        dispatch(fetchUsersBegin(true));

        fetch('http://localhost:8080/api/users')
            .then(response => response.json())
            .then(data => {
                dispatch(fetchUsersBegin(false));
                dispatch(fetchUsersSuccess(data));
            })
            .catch(() => dispatch(fetchUsersFailure(true)));
    };
};