import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class Contacts extends Component {
  render() {
    const id = 1;
    return (
      <div className="mdl-grid portfolio-max-width">
         <Link to={`contacts/${id}`}>Contacts</Link>
      </div>
    );
  }
}

export default withRouter(Contacts);