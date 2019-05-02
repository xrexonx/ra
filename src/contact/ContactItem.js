import React, { Component } from 'react';

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
        <td className="mdl-data-table__cell--non-numeric">{user.website}</td>
      </tr>
    );
  }
}

export default ContactItem;