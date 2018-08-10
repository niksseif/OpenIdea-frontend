import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Image } from 'semantic-ui-react'

class ModalEdit extends Component {
  state = {
    edit:true,
    selectedFile: null,
    key: ""
  }

  fileSelectHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }
  //updating the state of the key value of the text area
  updateFormState = (key, value) =>{
    console.log(key, value, 'name and value')
    this.setState({
      key: value
    })
  }
  handleChange = (e, { value }) => this.setState({ value })

  //updating the about value
 updateAbout = (e) => {
    console.log("i am the value of the about");
    e.preventDefault()
    this.updateFormState("about",e.target.value)
  }

  fileUploadHandler = async () => {
      console.log("User form state :", this.state )
      const response = await fetch('http://localhost:3000/ideas/id', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( this.state )
        })
      console.log(response,"<<<<RESPONSE");
  }

  render() {
    const { value } = this.state
    return (
      <Form >
        <Image
          type="file"
          src='https://react.semantic-ui.com/images/wireframe/image.png'
          size='small'
          wrapped
        />

        <Form.Field
          className="about"
          control={TextArea}
          label='About your idea'
          placeholder='Tell us more about you...'
          onChange={this.updateAbout}

        />
        <Form.Field
          control={Checkbox}
          label='I agree to the Terms and Conditions'

        />
        <Input
          type="file"
          onChange={this.fileSelectHandler}
          >

        </Input>
        <Form.Field
          control={Button}
          onClick={this.fileUploadHandler}
          >
          Submit

        </Form.Field>
      </Form>
    )
  }
}

export default ModalEdit
