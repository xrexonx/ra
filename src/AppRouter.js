import React, { Component } from 'react';
import { Route } from "react-router-dom";
import PortfolioList from './portfolio/List';
import About from './about/About';
import Contacts from "./contact/Contacts";
import Blog from "./blog/Blog";

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={PortfolioList} />
        <Route path="/blog/" component={Blog} />
        <Route path="/about/" component={About} />
        <Route path="/contacts/" component={Contacts} />
      </div>
    );
  }
}

export default AppRouter;