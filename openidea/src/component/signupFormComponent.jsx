import React, { Component } from 'react';
import { Divider, Form, Label, Checkbox, Button, Segment } from 'semantic-ui-react'

class LabelExamplePointing extends Component {
  render() {

    const { name, email, image_url, password,} = this.props

      //updateName
    const updateName = (e) => {
      e.prevtDefault()
      this.props.updateFormState("name",e.target.value)
    }
      // updateEmail
    const updateEmail = (e) => {
      e.preventDefault()
      this.props.updateFormState("email",e.target.value)
    }
      //updateImage
    const updateImage = (e) => {
      e.preventDefault("image_url",e.target.value)
      this.props.updateFormState("image_url",e.target.value)

    }
      //update password
    const updatePassword = (e) => {
      e.preventDefault("password",e.target.value)
      this.props.updateFormState("password",e.target.value)
    }

    return(
      <Segment style={{ backgroundColor:'lightgrey', marginLeft:100,marginRight:100}}>
        <Form >
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
                    fluid size='large'
                    style={{color:'orange'}}
                    href='/profile'
                    type='submit'
                    onClick={this.props.sendData}
                  >
                  Submit
                  </Button>
          </Form>
              </Segment>
    )
  }
}
export default LabelExamplePointing
