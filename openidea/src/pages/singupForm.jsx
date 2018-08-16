import React, { Component } from 'react';
import SingupFormComponent from '../component/signupFormComponent.js'
import { Segment } from 'semantic-ui-react'
import { getHeaders } from '../services/services'
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
  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify( this.state )
    })



}

  //here you need to add post to your route
  render(){
    //posting to the api
    return(

      <Segment style={{width:1300,marginTop:100}}>

      <SingupFormComponent
      response={this.response}
      name={this.state.name}
      email={this.state.email}
      image_url={this.state.image_url}
      password={this.state.password}
      updateFormState={this.updateFormState}
      sendData={this.sendData}
    />
  </Segment>
    )
  }
}
export default signupForm;
