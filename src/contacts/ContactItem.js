import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ContactItem extends Component {
  render() {
    const user = this.props.item;
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

export default ContactItem;