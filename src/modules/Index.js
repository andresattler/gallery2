import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import NotFound from './NotFound.js';
import config from '../config.toml'

const Content = ({match}) => {
  const index = config.titles.indexOf(match.params.title);
  const length = config.lengths[index];
  if (index != -1) {
    return (
      <div id="index">
        <header>
          <Link to="/">&#8962;</Link>
          <h1>{match.params.title}</h1>
        </header>
        <main>
          {
            Array.from(new Array(length),(val, i) => (
              <Link key={i} to={`/view/${match.params.title}/${i+1}`}>
                <img src={`/pics/${match.params.title}/${i+1}.jpg`}/>
              </Link>
            ))
          }
        </main>
      </div>
    )
  }else {
    return <NotFound/>
  }
}

export default class extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/index" component={NotFound}/>
        <Route path="/index/:title" component={Content}/>
      </Switch>
    )
  }
};
