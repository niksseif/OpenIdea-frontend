import React, { Component } from 'react';
import { Divider, Form, Label, Checkbox, Button } from 'semantic-ui-react'

class LabelExamplePointing extends Component {
  render(){
        console.log(this.props,"<<<<this.props");
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
          <input type='text' placeholder='Username' className="username"/>
          <Label basic color='red' pointing='left'>
            Enter your username
          </Label>
        </Form.Field>

        <Form.Field inline>
          <input type='text' placeholder='Password' className="password"/>
          <Label basic color='red' pointing='left'>
            Enter your password
          </Label>

        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit' >Submit</Button>

      </Form>
    )
  }
}
export default LabelExamplePointing
