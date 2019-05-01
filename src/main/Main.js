import React, { Component } from 'react';

import List from "../portfolio/List";

class Main extends Component {
  render() {
    return (
      <main className="mdl-layout__content">
        <List/>
      </main>
    );
  }
}

export default Main;