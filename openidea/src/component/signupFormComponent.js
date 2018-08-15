import React, { Component } from 'react';
import { Divider, Form, Label, Checkbox, Button, Segment } from 'semantic-ui-react'

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
          href='#'
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
// <Segment style={{ backgroundColor:'#FF8030',marginTop:100}}>
{/* <Form style={{ marginTop:50}}>
  <Form.Field>
    <label>First Name</label>
    <input placeholder='First Name' style={{ width:450}} />
  </Form.Field>
  <Form.Field>
    <label>Last Name</label>
    <input placeholder='Last Name'style={{ width:450}} />
  </Form.Field>
  <Form.Field>
    <Checkbox label='I agree to the Terms and Conditions' />
  </Form.Field>
  <Button type='submit'>Submit</Button>
</Form>
</Segment> */}
