import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import NotFound from './NotFound.js';
const months = ['nov', 'dec', 'jan', 'feb'];
const Content = ({match}) => {
  if (months.indexOf(match.params.month) != -1) {
    return (
      <div id="index">
        <header>
          <Link to="/">&#8962;</Link>
          <h1>{match.params.month}</h1>
        </header>
        <main>
          {months.map((month, i) => (
            <Link to={`/view/${match.params.month}/${i}`}>
              <img src="./pics/1.jpg"/>
            </Link>
          ))}
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
        <Route path="/index/:month" component={Content}/>
      </Switch>
    )
  }
};
