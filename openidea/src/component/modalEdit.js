import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Image,Segment } from 'semantic-ui-react'

class ModalEdit extends Component {
  state = {edit:true}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Segment style={{ backgroundColor:'lightgrey',marginTop:100}}>
      <Form>
        <Image
          src='https://react.semantic-ui.com/images/wireframe/image.png'
          size='small'
          wrapped
        />
        <Form.Field
          control={TextArea}
          label='About'
          placeholder='Tell us more about you...' />
        <Form.Field
          control={Checkbox}
          label='I agree to the Terms and Conditions' />
        <Form.Field
          control={Button}>
          Submit
        </Form.Field>
      </Form>
    </Segment>
    )
  }
}

export default ModalEdit
