import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router basename={process.env.PUBLIC_URL}>
    <React.StrictMode>
    <div>
      <Switch>
        <Route path="/resume" render={() => {window.location.href="https://chenliang.ca/ChenLiang_resume.pdf"}} />
        <Route path="/resume/" render={() => {window.location.href="https://chenliang.ca/ChenLiang_resume.pdf"}} />
        <Route path="/" component={App} />
      </Switch>
    </div>
    </React.StrictMode>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
