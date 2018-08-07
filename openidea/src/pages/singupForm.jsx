import React, { Component } from 'react';
import SingupFormComponent from '../component/signupFormComponent.js'


class signupForm extends Component  {
  //here you need to add post to your route
  render(){
    return(
      <div className="container">
        <br></br>
      <SingupFormComponent />
    </div>
    )
  }
}
export default signupForm;
