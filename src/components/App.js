import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import {
  MainPage,
  DetailPage,
  AuthPage,
  CommunityPage,
  NotFoundPage,
  NotGrantedPage,
} from "../pages";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/detail" component={DetailPage} />
            <Route exact path="/auth/:kind" component={AuthPage} />
            {/* <Route exact path="/auth/join" component={AuthPage} /> */}
            <Route exact path="/community" component={CommunityPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
