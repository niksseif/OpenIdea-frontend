import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'


import Landingpage from './pages/landingpage'
import SignupForm from './pages/singupForm'
import Profile from './pages/profile'
import Feed from './pages/feedPage'
import Login from './pages/login'




class App extends Component {

  state = {
    ideas: [],
    users:[],
    categories:[],
    authenticate:false
  };
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/feeds" component={Feed} />
        <Route exact path="/login" component={Login} />
      </Switch>

      </div>
    );
  }
}

export default App;
