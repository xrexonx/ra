import React, {Component} from 'react';
import Users from "../users/containers/Users";

class About extends Component {
  render() {
    return (
      <div className="mdl-grid portfolio-max-width">
        <Users/>
      </div>
    );
  }
}

export default About;