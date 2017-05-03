import React from 'react';
import {Link} from 'react-router-dom';
import config from '../config.toml'

function ImageFolder(props) {
  return (
    <Link to={`/view/${props.title}/1`}>
      <figure>
        <img src={`./pics/${props.title}/1.jpg`}></img>
        <figcaption>
          {props.title}
        </figcaption>
        <div className="menu">
          <Link to={`/view/${props.title}/1`}><img src="./icons/eye.png"/></Link>
          <Link to={'/index/'+props.title}><img src="./icons/grid.svg"/></Link>
        </div>
      </figure>
    </Link>
  )
};

export default class extends React.Component {
  render() {
    return (
      <div id="home">
        <div className="container">
          {config.titles.map((title) => <ImageFolder title={title}/>)}
        </div>
      </div>
    )
  }
};
