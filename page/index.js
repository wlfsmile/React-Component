import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import ContentList from './js/ContentList';
import Aticle from './js/Aticle';
import { Router, Route, hashHistory } from 'react-router';

render((
 <Router history={hashHistory}>
    <Route path="/" component={ContentList}/>
    <Route path="/aticle/:id" component={Aticle} />
  </Router>
),document.getElementById('root'));