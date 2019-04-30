import React, { Component } from 'react';

class NavLinks extends Component {
  render() {
    return (
      <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
        <a className="mdl-navigation__link is-active" href="index.html">Portfolio</a>
        <a className="mdl-navigation__link" href="blog.html">Blog</a>
        <a className="mdl-navigation__link" href="about.html">About</a>
        <a className="mdl-navigation__link" href="contact.html">Contact</a>
      </nav>
    );
  }
}

export default NavLinks;