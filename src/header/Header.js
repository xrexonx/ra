import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import NavLinks from '../navLinks/NavLinks';

class Header extends Component {
  render() {
    const { headerTitle } = this.props;
    return (
      <Fragment>
        <header className="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
          <div className="mdl-layout__header-row portfolio-logo-row">
            <span className="mdl-layout__title">
              <div className="portfolio-logo" />
              <span className="mdl-layout__title">{headerTitle}</span>
            </span>
          </div>
          <div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
            <NavLinks/>
          </div>
        </header>
        <div className="mdl-layout__drawer mdl-layout--small-screen-only">
          <NavLinks/>
        </div>
      </Fragment>
    );
  }
}

Header.propTypes = {
  headerTitle: PropTypes.string
};

export default Header;