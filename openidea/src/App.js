import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom'
import Landingpage from './pages/landingpage'
import SignupForm from './pages/singupForm'
import Profile from './pages/profile'
// import Example from './pages/example'



class App extends Component {

  state = {
    ideas: [],
    users:[],
    categories:[]
  };
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/profile" component={Profile} />
        {/* <Route exact path="/profile" component={Example} /> */}

      </div>
    );
  }
}

export default App;
