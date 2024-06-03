import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const routing = (
  <>
    <Helmet>
      <title>Chen Liang | Senior Software Engineer | Entrepreneur | Mentor</title>
      <meta name="description" content="Chen is a software engineer. He is energetic, adaptable, and endlessly curious about the world around us; He brings this passion to solving complex problems with simple, elegant solutions." />
    </Helmet>
    <Router>
        <Switch>
          <Route path='/links' component={() => { window.location = 'https://linktr.ee/chenliang'; return null;} }/>
          <Route path='/consult' component={() => { window.location = 'https://chenliang.as.me/schedule.php'; return null;} }/>
          <Route path="/">
            <App/>
          </Route>
        </Switch>
    </Router>
  </>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
