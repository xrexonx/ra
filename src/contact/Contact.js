import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Loading from '../_widgets/Loading';

class Contact extends Component {

  fetchUser() {
    const userId = this.props.match.params.id;
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(data => data)
  }

  async componentDidMount() {
    const user = await this.fetchUser();
    console.log({user});
    this.setState({user})
  }

  render() {
    const user = this.state && this.state.user;
    return (
      <div className="mdl-grid portfolio-max-width">
        User: {this.props.match.params.id}
        {user && !!user ? user.name : <Loading />}
      </div>
    );
  }
}

export default withRouter(Contact);