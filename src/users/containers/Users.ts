import React from 'react';
import { connect } from 'react-redux';
import Users from "../components/Users";
import { AppState } from "../../_definitions/state";
import { usersFetchData } from "../middleware";

const mapStateToProps = (state: AppState) => {
    console.log({state});
    if (state && state.user) {
        const {
            user: { items, loading, error }
        } = state;
        return {
            items,
            loading,
            error
        }
    }
    return {}
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchUsers: () => {
            console.log('fetchUsers');
            dispatch(usersFetchData())
        }
    };
};

const component: React.ComponentClass<any> = Users;
export default connect(mapStateToProps, mapDispatchToProps)(component);