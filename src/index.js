import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Router, Route } from 'react-router';
import { createHashHistory } from 'history';
import Borderlands2Calculator from './components/Borderlands2Calculator';
import Welcome from './components/Welcome';

ReactDOM.render(
  <Router history={createHashHistory()}>
    <Route exact path="/" component={Welcome} />
    <Route path="/borderlands2-calculator" component={Borderlands2Calculator} />
  </Router>,
  document.getElementById('root')
);