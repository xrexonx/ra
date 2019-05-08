import React, { Component, ReactPropTypes } from 'react';
import Main from './main/Main';
import Header from './header/Header';
import Footer from './footer/Footer';
import './App.css';
import { BrowserRouter } from "react-router-dom";

interface State {
  appTitle: string;
}

class App extends Component<{}, State> {

  constructor(props: ReactPropTypes) {
    super(props);
    this.state = {
      appTitle: 'React JS Training - FPT Software Philippines'
    };
  }

  render() {
    const { appTitle } = this.state;
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
