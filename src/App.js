import React from "react";
import { Switch, Route } from "react-router-dom";
import {Helmet} from 'react-helmet'
import "./App.css";

import Home from "./pages/home/home.component";
// import Project from "./pages/project/project.component";

class App extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Chen Liang | Full Stack Software Engineer | Toronto, Canada</title>
          <meta name="description" content="Chen is a software engineer based out of Toronto, Canada. His passion is to work with talented individuals and solve complex problems with simple, elegant solutions." />
        </Helmet>
        <Switch>
          <Route exact path="/resume" render={() => {window.location.href="/ChenLiang_Resume.pdf"}} />
          <Route exact path="/resume/" render={() => {window.location.href="/ChenLiang_Resume.pdf"}} />
          {/* <Route exact path="/projects" component={Project} /> */}
          {/* <Route exact path="/project" component={Project} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
export default App;









