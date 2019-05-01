import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavLinks extends Component {
  render() {
    return (
      <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
        <Link className="mdl-navigation__link is-active" to="/">Home</Link>
        <Link className="mdl-navigation__link" to="/blog">Blog</Link>
        <Link className="mdl-navigation__link" to="/about">About</Link>
        <Link className="mdl-navigation__link" to="/contacts">Contacts</Link>
      </nav>
    );
  }
}

export default NavLinks;