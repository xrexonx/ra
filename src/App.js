import React, { Component } from 'react';
import Main from './main/Main';
import Header from './header/Header';
import Footer from './footer/Footer';
import './App.css';
import { BrowserRouter } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appTitle: 'React JS Training - FPT Software Philippines'
    };
  }

  render() {
    const appTitle = this.state.appTitle;
    return (
      <BrowserRouter>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header headerTitle={appTitle} />
          <Main/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
