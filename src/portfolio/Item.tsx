import React, { Component } from 'react';
import { Post } from "../_definitions/data";

interface Props {
  post: Post;
}

class Item extends Component<Props> {
  render() {
    const { post: { title, body } } = this.props;
    return (
      <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
        <div className="mdl-card__media">
          <img className="article-image" src=" images/example-work01.jpg" alt=""/>
        </div>
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">{title}</h2>
        </div>
        <div className="mdl-card__supporting-text">{body}</div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent"
             href="portfolio-example01.html">Read more</a>
        </div>
      </div>
    );
  }
}

export default Item;