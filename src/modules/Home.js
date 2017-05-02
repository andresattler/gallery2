import React from 'react';
import {Link} from 'react-router-dom';
const titles = ['nov', 'dec', 'jan', 'feb'];

function ImageFolder(props) {
  return (
    <Link to={props.title}>
      <figure>
        <img src="./pics/1.jpg"></img>
        <figcaption>{props.title}</figcaption>
      </figure>
    </Link>
  )
};

export default class extends React.Component {
  render() {
    return (
      <div>
        <div id="index-container">
          {titles.map((title) => <ImageFolder title={title}/>)}
        </div>
      </div>
    )
  }
};
