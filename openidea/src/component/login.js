import React, { Component } from "react";
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react'

class FormExampleForm extends Component {
  render(){
    return(
      <Segment
        style={{ backgroundColor:'#FF8030',marginTop:100}}>
        <Form
          style={{ marginTop:50}}
          onSubmit={this.props.handleLogin}>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder='Email'
              style={{ width:450}}
              onChange={this.props.updateEmail}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder='Password'
              style={{ width:450}}
              onChange={this.props.updatePassword}/>
          </Form.Field>
          <Button
            type='submit'
            onClick = {this.props.handleSubmit }
            >
            Submit
          </Button>
        </Form>
      </Segment>
    )
}
}

export default FormExampleForm
