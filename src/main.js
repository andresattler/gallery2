import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import config from './config.toml';

import Home from './modules/Home.js';
import View from './modules/View.js';
import Index from './modules/Index.js';
import NotFound from './modules/NotFound.js';


const url = config.url;

render((
  <Router >
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/view" component={View}/>
      <Route path="/index" component={Index}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
), document.getElementById('app'));
