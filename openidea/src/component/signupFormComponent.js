import React, { Component } from 'react';
import { Divider, Form, Label, Checkbox, Button, Segment } from 'semantic-ui-react'


class signupFormComponent extends Component {
  render(){

    const {  handleChange, handleSubmit } = this.props
    // const { name, email, image_url, password } = this.state
    console.log(this.props, 'this props from signup component')
      //updateName
      const updateName = (e) => {
         e.preventDefault()
         let value=e.target.value
         console.log(value);
        this.props.handleChange("name",value)
      }
      // updateEmail
      const updateEmail = (e) => {
        e.preventDefault()
        let value=e.target.value
        this.props.handleChange("email",value)
      }
      //updateImage
      const updateImage = (e) => {
        let value=e.target.value
        e.preventDefault()
        this.props.handleChange("image_url",value)

      }
      //update password
      const updatePassword = (e) => {
        e.preventDefault()
        let value=e.target.value
        this.props.handleChange("password",value)
      }


    return(
        <Segment style={{ backgroundColor:'lightgrey', marginLeft:100,marginRight:100}}>
              <Form >
                <Form.Field >
                    <Divider />
                  <input
                    type='text'
                    placeholder='name'
                    className='name'
                    onChange={ updateName }
                    value={this.props.name}
                  />
                </Form.Field>

                <Form.Field >
                  <input
                    type='email'
                    placeholder='email'
                    className="email"
                    pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
                    onChange={ updateEmail }
                    value={this.props.email}
                    required
                  />

                </Form.Field>
                  <Form.Field >
                    <input
                      type='text'
                      placeholder='image_url'
                      className="image_url"
                      onChange={updateImage}
                      value={this.props.image_url}
                      required
                    />

                  </Form.Field>
                  <Form.Field >
                      <input
                        type='password'
                        placeholder='Password'
                        className="password"
                        minLength='4'
                        onChange={updatePassword }
                        value={this.props.password}
                        required
                      />

                  </Form.Field>
                  <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                  </Form.Field>
                  <Button
                    fluid size='large'
                    style={{color:'orange'}}
                    type='submit'
                    onClick={handleSubmit}

                  >
                  Submit
                  </Button>
              </Form>
              </Segment>
    )
  }
}
export default signupFormComponent
