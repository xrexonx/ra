import React, { Component } from 'react';
import { Route } from "react-router-dom";
import PortfolioList from './portfolio/List';
import Blog from "./blog/Blog";
import About from './about/About';
import Contact from "./contact/Contact";
import Contacts from "./contact/Contacts";

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={PortfolioList} />
        <Route path="/blog/" component={Blog} />
        <Route path="/about/" component={About} />
        <Route path="/contacts/" component={Contacts} />
        <Route path="/contacts/:id" component={Contact} />
      </div>
    );
  }
}

export default AppRouter;