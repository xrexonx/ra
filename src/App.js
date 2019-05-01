import React, { Component } from 'react';
import Main from './main/Main';
import Header from './header/Header';
import Footer from './footer/Footer';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header headerTitle="React JS Training - FPT Software Philippines" />
          <Main/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
