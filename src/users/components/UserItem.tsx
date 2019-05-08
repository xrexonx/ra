import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { User } from "../../_definitions/data";

interface Props {
    user: User;
}

class UserItem extends Component<Props> {
    render() {
        const { user } = this.props;
        return (
            <tr>
                <td className="mdl-data-table__cell--non-numeric">{user.name}</td>
                <td className="mdl-data-table__cell--non-numeric">{user.email}</td>
                <td className="mdl-data-table__cell--non-numeric">{user.phone}</td>
                <td className="mdl-data-table__cell--non-numeric">{user.company.name}</td>
                <td className="mdl-data-table__cell--non-numeric">{user.address.city}</td>
                <td className="mdl-data-table__cell--non-numeric">
                    <Link to={`/contact/${user.id}`}>View</Link>
                </td>
            </tr>
        );
    }
}

export default UserItem;