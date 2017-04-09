import './styles/app.css';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Main } from './components/Main';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';

const where = document.getElementById('app');

const router = (
    <Router history={hashHistory} >
        <Route path='/' component={Main}>
            <Route path='/about' component={About} />
            <Route path='/portfolio' component={Portfolio} />
            <IndexRoute component={About} />
        </Route>
    </Router>    
);

ReactDom.render(router, where);
