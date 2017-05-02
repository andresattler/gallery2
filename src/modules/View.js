import React from 'react';
const titles = ['nov', 'dec', 'jan', 'feb'];

const TopBar = (props) => (
  <div>
    <a>Back</a>
    <p>{props.count}</p>
    <a>Grid</a>
  </div>
)

const Navigation = () => (
  <div>
    <div id="left">&#8592;</div>
    <div id="right">&#8594;</div>
  </div>
)
export default (props) =>
    (
      <div className="container">
        <TopBar count="1"/>
        <figure>
          <img src="./pics/1.jpg"></img>
          <figcaption>description</figcaption>
        </figure>
        <Navigation/>
      </div>
    )
;
