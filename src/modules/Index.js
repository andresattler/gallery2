import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NotFound from './NotFound.js';
const months = ['nov', 'dec', 'jan', 'feb'];
const Content = ({match}) => {
  if (months.indexOf(match.params.month) != -1) {
    return <h2>{match.params.month}</h2>
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
