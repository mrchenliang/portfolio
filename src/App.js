import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/home.component";
// import Project from "./pages/project/project.component";

class App extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/resume" render={() => {window.location.href="/ChenLiang_resume.pdf"}} />
          <Route exact path="/resume/" render={() => {window.location.href="/ChenLiang_resume.pdf"}} />
          {/* <Route exact path="/projects" component={Project} /> */}
          {/* <Route exact path="/project" component={Project} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
export default App;









