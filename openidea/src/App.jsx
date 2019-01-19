import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'


import Landingpage from './pages/landingpage'
import SignupForm from './pages/singupForm'
import Profile from './pages/profile'
import Feed from './pages/feedPage'
import Login from './pages/login'
<<<<<<< HEAD
import Create from './pages/create'
=======
import CreateIdea from './pages/signupIdea'

>>>>>>> ea5830a50a05c7c45f236a873a441a8efedd83a9



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
<<<<<<< HEAD
        <Route exact path="/login" component={Login} />  
          <Route exact path="/create" component={Create} />
=======
        <Route exact path="/login" component={Login} />
        <Route exact path = "/idea" component={CreateIdea}/>
>>>>>>> ea5830a50a05c7c45f236a873a441a8efedd83a9
      </Switch>

      </div>
    );
  }
}

export default App;
