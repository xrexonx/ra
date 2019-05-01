import React, { Component } from 'react';
import AppRouter from "../AppRouter";

class Main extends Component {
  render() {
    return (
      <main className="mdl-layout__content">
        <AppRouter />
      </main>
    );
  }
}

export default Main;