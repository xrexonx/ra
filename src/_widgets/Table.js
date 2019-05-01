import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <table>
        <thead>
        <tr>
          <th>Just a table</th>
        </tr>
        </thead>
        {this.props.children}
      </table>
    );
  }
}