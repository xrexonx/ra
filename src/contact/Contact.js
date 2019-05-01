import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div className="mdl-grid portfolio-max-width">
        Contact ID: {this.props.match.params.id}
      </div>
    );
  }
}

export default withRouter(Contact);