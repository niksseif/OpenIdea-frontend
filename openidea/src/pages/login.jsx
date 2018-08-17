import React, { Component } from 'react';
import Login from '../component/login.js'
import { getHeaders, handleLogin } from '../services/services'


class LoginPage extends Component  {
  state = {
    email: "",
    password: ""
  }


  handleChange = (name, value) => {
      this.setState({
        [name]: value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      console.log("you are hiting the fetch function on the signup form page");
      const { email, password } = this.state
      handleLogin( { email, password } )
        .then((data) => {

        console.log('response data coming backkkkk:', data)
          // if (data.result === 'ok'){
          //   window.location = '/profile'
          // }
        })
        .then(this.setState({
          email: '',
          password: ''
      }))
    }

  render(){

    return(
      <Login
        handleLogin={this.handleLogin}
        updateEmail={this.updateEmail}
        updatePassword={this.updatePassword}
        handleLogin={this.handleSubmit}
      />
    )
  }
}

export default LoginPage
