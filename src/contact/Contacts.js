import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import ContactItem from './ContactItem';

class Contacts extends Component {

  fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => data)
  }

  async componentDidMount() {
    const contacts = await this.fetchUsers();
    this.setState({contacts})
  }

  render() {
    const contacts = this.state && this.state.contacts;
    return (
      <div className="mdl-grid portfolio-max-width">
        <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
          <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Name</th>
            <th className="mdl-data-table__cell--non-numeric">Email</th>
            <th className="mdl-data-table__cell--non-numeric">Phone</th>
            <th className="mdl-data-table__cell--non-numeric">Company</th>
            <th className="mdl-data-table__cell--non-numeric">Address</th>
            <th className="mdl-data-table__cell--non-numeric">Website</th>
          </tr>
          </thead>
          <tbody>
            {contacts && contacts.length < 0 && <tr>No Contacts found </tr>}
            {contacts && contacts.map(contact => <ContactItem key={contact.id} item={contact} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(Contacts);