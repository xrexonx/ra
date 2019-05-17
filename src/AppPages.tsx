import React, { Component, ComponentClass, Fragment } from 'react';
import { Route } from "react-router-dom";
import PortfolioList from './portfolio/List';
import Blog from "./blog/Blog";
import About from './about/About';
import Contact from "./contact/Contact";
import Contacts from "./contacts/Contacts";

class AppPages extends Component<ComponentClass> {
  render() {
    return (
      <Fragment>
        <Route path="/" exact component={PortfolioList} />
        <Route path="/blog/" component={Blog} />
        <Route path="/about/" component={About} />
        <Route path="/contacts/" component={Contacts} />
        <Route path="/contact/:id" component={Contact} />
      </Fragment>
    );
  }
}

export default AppPages;