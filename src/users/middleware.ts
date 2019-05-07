import { Dispatch } from "redux";
import {
    fetchUsersBegin,
    fetchUsersSuccess,
    fetchUsersFailure
} from "./actions";

export const usersFetchData = () => {
    return (dispatch: Dispatch) => {
        dispatch(fetchUsersBegin(true));

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                dispatch(fetchUsersBegin(false));
                dispatch(fetchUsersSuccess(data));
            })
            .catch(() => dispatch(fetchUsersFailure(true)));
    };
};