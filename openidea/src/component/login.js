import React from 'react'
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Segment style={{ backgroundColor:'#FF8030',marginTop:100}}>
  <Form style={{ marginTop:50}}>
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
  </Segment>
)

export default FormExampleForm
