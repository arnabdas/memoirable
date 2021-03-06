/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import browserHistory from './browserHistory';

import { MemoirableApp } from './components/memoirable';
import { Home } from './views/home';
import { Dashboard } from './views/dashboard';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={MemoirableApp}>
        <IndexRoute component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Route>
    </Router>
  ),
  document.getElementById('memoirable')
);