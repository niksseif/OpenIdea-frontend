import React from 'react'
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react'

const FormExampleForm = (props) => (

  <Segment style={{ backgroundColor:'#FF8030',marginTop:100}}>
  <Form style={{ marginTop:50}} onSubmit={props.handleLogin}>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' style={{ width:450}} onChange={props.updateEmail}/>
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password'style={{ width:450}} onChange={props.updatePassword}/>
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
  </Segment>
)

export default FormExampleForm
