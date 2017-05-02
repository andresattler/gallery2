import React from 'react';
import {Route, Switch} from 'react-router-dom';

const Content = ({match}) => <h2>{match.params.month}</h2>

export default class extends React.Component {
  render() {
    console.log("test")
    return (
      <div>
        <Switch>
          <Route exact path="/index" component={() => <h1>Index</h1>}/>
          <Route path="/index/:month" component={Content}/>
        </Switch>
      </div>
    )
  }
};
