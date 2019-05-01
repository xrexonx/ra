import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class NavLinks extends Component {
  render() {
    const path = this.props.location.pathname;
    return (
      <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
        <Link className={`mdl-navigation__link ${path === '/' ? 'is-active': ''}`} to="/">Portfolio</Link>
        <Link className={`mdl-navigation__link ${path === '/blog' ? 'is-active': ''}`} to="/blog">Blog</Link>
        <Link className={`mdl-navigation__link ${path === '/about' ? 'is-active': ''}`} to="/about">About</Link>
        <Link className={`mdl-navigation__link ${path === '/contacts' ? 'is-active': ''}`} to="/contacts">Contacts</Link>
      </nav>
    );
  }
}

export default withRouter(NavLinks);