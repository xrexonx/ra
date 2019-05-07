import React, { Component } from 'react';
import { User } from "../../_definitions/data";

interface Props {
    items: User[]
    loading: boolean;
    error: string[];
    fetchUsers: () => void
}

class Users extends Component<Props> {
    componentDidMount(): void {
        this.props.fetchUsers()
    }

    render() {
        return (
            <div>
                <h2>dsfsdf</h2>
            </div>
        );
    }
}

export default Users;