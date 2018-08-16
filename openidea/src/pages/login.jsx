import React, { Component } from 'react';
import Login from '../component/login.js'
import { getHeaders } from '../services/services'

class LoginPage extends Component  {
  state = {
    email: "",
    password: ""
  }

  handleLogin = async (formData) => {
    let response = await fetch(`http://localhost:3000/login`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: getHeaders(),
    })
    if (response.status === 200) {
      let parsedResponse = await response.json()
      localStorage.setItem("currentToken", parsedResponse.token)
      this.props.setLoginState(parsedResponse.token)
    } else {
      alert("Unauthorized, handle it later")
    }
  }

  updateEmail = (event) => {
    this.setState({email: event.target.value})
  }

  updatePassword = (event) => {
    this.setState({password: event.target.value})
  }

  render(){

    return(
      <Login handleLogin={this.handleLogin} updateEmail={this.updateEmail} updatePassword={this.updatePassword}/>
    )
  }
}

export default LoginPage
