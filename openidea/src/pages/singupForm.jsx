import React, { Component } from 'react';
import SingupFormComponent from '../component/signupFormComponent.js'


class signupForm extends Component  {
  //posting to the api
  sendMessage = async () => {
  const username = document.querySelector('#username').value
  const password = document.querySelector('#password').value
  const response =
  await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
    console.log(response,"<<<<RESPONSE");
    
}

  //here you need to add post to your route
  render(){
    return(
      <div className="container">
        <br></br>
      <SingupFormComponent
      response={this.response}/>
    </div>
    )
  }
}
export default signupForm;
