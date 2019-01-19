import React, { Component } from 'react';
import SingupFormComponent from '../component/signupFormComponent'
import { Segment } from 'semantic-ui-react'
import { getHeaders, signup } from '../services/services'
import Background from '../form.png'

class signupForm extends Component  {
  state = {
          name:'',
          email:'',
          image_url:'',
          password:'',
          error: null
      };


handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

handleSubmit = (e) => {
  console.log("you are hiting the fetch function on the signup form page");
  const { name, email, image_url, password } = this.state
  signup( { name, email, image_url, password } )
  .then((data) => {
      console.log('response data coming backkkkk:', data)
    if (data.message === 'User created successfully.'){
      window.location = '/create'
    } else if (data.message === 'A user with that email already exists'){
      return (alert ('A user with that email exist'), window.location='/login')
    }
  })
  .then(this.setState({
    name: '',
    email: '',
    image_url: '',
    password: ''
  }))
}


  render(){
    return(
      <Segment style={{ marginTop: 150, backgroundImage: "url(" + { Background } + ")"}}>
        <SingupFormComponent
          // response={this.response}
          name={this.state.name}
          email={this.state.email}
          image_url={this.state.image_url}
          password={this.state.password}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          validate={this.validate}

        />
      </Segment>
    )
  }
}
export default signupForm;
