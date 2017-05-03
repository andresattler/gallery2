import React from 'react';
import {Link} from 'react-router-dom';
const titles = ['nov', 'dec', 'jan', 'feb'];

function ImageFolder(props) {
  return (
    <Link to={'/view/'+props.title}>
      <figure>
        <img src="./pics/1.jpg"></img>
        <figcaption>
          {props.title}
        </figcaption>
        <div className="menu">
          <Link to={'/view/'+props.title}><img src="./icons/eye.png"/></Link>
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
          {titles.map((title) => <ImageFolder title={title}/>)}
        </div>
      </div>
    )
  }
};
