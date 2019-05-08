import React, { Component } from 'react';
import { User } from "../../_definitions/data";
import UserItem from "./UserItem";

interface Props {
    items: User[];
    loading: boolean;
    error: string[];
    fetchUsers: () => void;
}

class Users extends Component<Props> {
    componentDidMount(): void {
        this.props.fetchUsers()
    }

    render() {
        const { items, loading, error } = this.props;

        if (loading) {
            return (
                <div>Loading</div>
            )
        }

        if (error) {
            return (
                <div>{error}</div>
            )
        }

        return (
            <div className="mdl-grid portfolio-max-width">
                <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                    <thead>
                    <tr>
                        <th className="mdl-data-table__cell--non-numeric">Name</th>
                        <th className="mdl-data-table__cell--non-numeric">Email</th>
                        <th className="mdl-data-table__cell--non-numeric">Phone</th>
                        <th className="mdl-data-table__cell--non-numeric">Website</th>
                        <th className="mdl-data-table__cell--non-numeric">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items && items.length < 0 && <tr>No Contacts found </tr>}
                    {items && items.map(item => <UserItem key={item.id} user={item} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Users;