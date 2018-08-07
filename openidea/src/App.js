import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom'
import Landingpage from './pages/landingpage'
import SignupForm from './pages/singupForm'
import Profile from './pages/profile'



class App extends Component {

  state = {
    ideas: [],
    users:[],
    categories:[]
  };
  render() {
    console.log(process.env.NODE_ENV,"<<<<this is your process.env");
    console.log(process.env.REACT_APP_KITTEN,"<<<<react app kitten");
    console.log(process.env.KITTEN,"<<<<kitten");
    return (
      <div className="App">
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/profile" component={Profile} />

      </div>
    );
  }
}

export default App;
