import React, {Component} from 'react';
import Item from "./Item";

class List extends Component {
  render() {
    return (
      <div className="mdl-grid portfolio-max-width">
        <Item/>
      </div>
    );
  }
}

export default List;