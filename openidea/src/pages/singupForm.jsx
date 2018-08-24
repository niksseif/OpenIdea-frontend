import React, { Component } from 'react';
import SingupFormComponent from '../component/signupFormComponent'
import { Segment } from 'semantic-ui-react'
import { getHeaders, signup } from '../services/services'

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
    e.preventDefault()
    console.log("you are hiting the fetch function on the signup form page");
    const { name, email, image_url, password } = this.state
    signup( { name, email, image_url, password } )
      .then((data) => {
      console.log('response data coming backkkkk:', data)
        if (data.result === 'ok'){
          window.location = '/profile'
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
      <Segment style={{width:1300,marginTop:100}}>
        <SingupFormComponent
          // response={this.response}
          name={this.state.name}
          email={this.state.email}
          image_url={this.state.image_url}
          password={this.state.password}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </Segment>
    )
  }
}
export default signupForm;
