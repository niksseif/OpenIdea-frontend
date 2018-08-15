import React, { Component } from 'react';
import { Divider, Form, Checkbox, Button, Segment } from 'semantic-ui-react'

class LabelExamplePointing extends Component {
  render(){

    const { name, email, image_url, password, validateForm} = this.props



      const updateName = (e) => {
         e.preventDefault()
        this.props.updateFormState("name",e.target.value)
      }
      const updateEmail = (e) => {
        e.preventDefault()
        this.props.updateFormState("email",e.target.value)
      }
      const updateImage = (e) => {
        e.preventDefault("image_url",e.target.value)
        this.props.updateFormState("image_url",e.target.value)

      }
      const updatePassword = (e) => {
        e.preventDefault("password",e.target.value)
        this.props.updateFormState("password",e.target.value)
      }

    return(
      <Segment style={{ backgroundColor:'lightgrey',marginTop:100}}>
      <Form>
        <Form.Field >
            <Divider />
          <input
            type='text'
            placeholder='name'
            className="name"
            onChange={updateName}
          />

        </Form.Field>

        <Form.Field >
          <input
            type='text'
            placeholder='email'
            className="email"
            pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
            onChange={updateEmail}
          />

        </Form.Field>
        <Form.Field >
          <input
            type='text'
            placeholder='image_url'
            className="image_url"
            onChange={updateImage}
          />

        </Form.Field>
        <Form.Field >
          <input
            type='text'
            placeholder='Password'
            className="password"
            onChange={updatePassword}
          />

        </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button
            style={{color:'orange'}}
            href='/profile'
            type='submit'
            onClick={this.props.sendData}
          >
            <a href='/profile'>Submit</a>
          </Button>

      </Form>
    </Segment>
    )
  }
}
export default LabelExamplePointing
