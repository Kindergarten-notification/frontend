import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import {
  MainPage,
  DetailPage,
  LoginPage,
  JoinPage,
  HomePage,
  NotFoundPage,
  // NotGrantedPage,
} from '../pages';
import { Post, Notification, Album } from '../pages/community/index';
import Nav from './nav/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/detail" component={DetailPage} />
            <Route exact path="/auth/login" component={LoginPage} />
            <Route exact path="/auth/join" component={JoinPage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/home/post" component={Post} />
            <Route exact path="/home/notification" component={Notification} />
            <Route exact path="/home/album" component={Album} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
