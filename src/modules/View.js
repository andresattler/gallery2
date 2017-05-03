import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import config from '../config.toml';
import NotFound from './NotFound.js';

const TopBar = (props) => (
  <div className="top-bar">
    <Link to="/">&#8962;</Link>
    <p>{props.count}</p>
    <Link to={"/index/" + props.month}><img src="./icons/grid.svg"/></Link>
  </div>
)

const Navigation = (props) => (
  <div id="arrows">
    <Link to={`/view/${props.month}/${props.nr-1}`} id="left" className="arrow">&#8592;</Link>
    <Link to={`/view/${props.month}/${props.nr+1}`} id="right" className="arrow">&#8594;</Link>
  </div>
)
const Content = ({match}) => {
  if (config.titles.indexOf(match.params.month) != -1)
  {return (
    <div id="view">
      <TopBar count="1" month={match.params.month}/>
        <Route path="/view/:month/:nr" component={({match}) => (
          <figure>
            <img src={`./pics/${match.params.month}/${match.params.nr}.jpg`}/>
            <figcaption>
              <p>{match.params.nr}</p>
            </figcaption>
            <Navigation month={match.params.month} nr={parseInt(match.params.nr)}/>
          </figure>
          )}/>

    </div>
  )
}else{
  return <NotFound/>
}

}
export default () =>
    (
      <Switch>
        <Route exact path="/view" component={NotFound}/>
        <Route path="/view/:month" component={Content}/>
      </Switch>
    )
;
