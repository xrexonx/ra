import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Fetch extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
  };

  state = {
    data: {},
    isLoading: false,
  };

  _fetch = async () => {
    const res = await fetch(this.props.url);
    const data = await res.json();

    this.setState({
      data,
      isLoading: false,
    });
  };

  componentDidMount() {
    this.setState({ isLoading: true }, this._fetch);
  }

  render() {
    return this.props.render(this.state);
  }
}