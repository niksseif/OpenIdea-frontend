import React, { Component } from 'react';
import Login from '../component/login.jsx'
import {  handleLogin,currentUserId } from '../services/services'


class LoginPage extends Component  {
  state = {
    email: "",
    password: "",
    users_id:currentUserId()
  }


  handleChange = (name, value) => {
      this.setState({
        [name]: value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      console.log("you are hiting the fetch function on the login form page");
<<<<<<< HEAD
      const { email, password } = this.state
      // console.log(this.state,"<<<this is the state before handle the login");
=======
      const { email, password} = this.state
      console.log(this.state,"<<<this is the state before handle the login");
>>>>>>> ea5830a50a05c7c45f236a873a441a8efedd83a9
      handleLogin( { email, password } )
      
       
      .then(() => this.props.history.push('/profile'))
      .catch((err) => 'You are not allowed')
    }


  render(){

    return(
      <Login
        style={{width:1300,marginTop:100}}
        email={this.state.email}
        password={this.state.password}
        users_id={this.state.users_id}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    )
  }
}

export default LoginPage
