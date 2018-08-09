import React, { Component } from 'react';
import SingupFormComponent from '../component/signupFormComponent.js'


class signupForm extends Component  {

  state = {
          name:"",
          email:"",
          image_url:"",
          password:"",
          error: null
      };
//update form setState to assign the states to its values
updateFormState = (key, value) =>{
  console.log(key, value, 'name and value')
  this.setState({
    [key]: value
  })
}
sendData = async () => {
  console.log("User form state :", this.state )
  const response = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( this.state )
    })

  console.log(response,"<<<<RESPONSE");

}

  //here you need to add post to your route
  render(){
    //posting to the api


    return(
      <div className="container">
        <br></br>
      <SingupFormComponent
      response={this.response}
      name={this.state.name}
      email={this.state.email}
      image_url={this.state.image_url}
      password={this.state.password}
      updateFormState={this.updateFormState}
      sendData={this.sendData}
    />
    </div>
    )
  }
}
export default signupForm;
