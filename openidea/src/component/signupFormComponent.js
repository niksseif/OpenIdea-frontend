import React, { Component } from 'react';
import { Divider, Form, Label, Checkbox, Button } from 'semantic-ui-react'

class LabelExamplePointing extends Component {
  render(){
    console.log(this.props, 'this props')
    const { name, email, image_url, password,} = this.props
        // console.log(this.props,"<<<<this.props");
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

      <Form>
        <Form.Field inline>
            <Divider />

            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
          <input
            type='text'
            placeholder='name'
            className="name"
            // value={name}
            onChange={updateName}
          />
          <Label basic color='red' pointing='left'>
            Enter your name
          </Label>
        </Form.Field>

        <Form.Field inline>
          <input
            type='text'
            placeholder='email'
            className="email"
            // value={email}
            onChange={updateEmail}
          />
          <Label basic color='red' pointing='left'>
            Enter your email
          </Label>
        </Form.Field>
        <Form.Field inline>
          <input
            type='text'
            placeholder='image_url'
            className="image_url"
            // value={image_url}
            onChange={updateImage}
          />
          <Label basic color='red' pointing='left'>
            Enter your image_url
          </Label>
        </Form.Field>
        <Form.Field inline>
          <input
            type='text'
            placeholder='Password'
            className="password"
            onChange={updatePassword}
          />
          <Label basic color='red' pointing='left'>
            Enter your password
          </Label>
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button
          href='#'
          type='submit'
          onClick={this.props.sendData}

        >
          Submit
        </Button>

      </Form>
    )
  }
}
export default LabelExamplePointing
