import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
const titles = ['nov', 'dec', 'jan', 'feb'];

const TopBar = (props) => (
  <div className="top-bar">
    <Link to="/">&#8962;</Link>
    <p>{props.count}</p>
    <Link to={"/index/" + props.month}><img src="./icons/grid.svg"/></Link>
  </div>
)

const Navigation = () => (
  <div id="arrows">
    <div id="left" className="arrow">&#8592;</div>
    <div id="right" className="arrow">&#8594;</div>
  </div>
)
const Content = ({match}) => (
  <div id="view">
    <TopBar count="1" month={match.params.month}/>
    <figure>
      <img src="./pics/1.jpg"></img>
      <figcaption>
        <p>description</p>
      </figcaption>
      <Navigation/>
    </figure>
  </div>
)
export default () =>
    (
      <Switch>
        <Route exact path="/view" component={() => <h1>View</h1>}/>
        <Route path="/view/:month" component={Content}/>
      </Switch>
    )
;
