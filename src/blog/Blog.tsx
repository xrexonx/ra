import React, { Component } from 'react';
// import FormikComponent from './Formik';
import Reservation from './Reservation';

class Blog extends Component {

  render() {
    return (
      <div className="mdl-grid portfolio-max-width">
        {/*<FormikComponent />*/}
        <Reservation />
      </div>
    );
  }
}

export default Blog;