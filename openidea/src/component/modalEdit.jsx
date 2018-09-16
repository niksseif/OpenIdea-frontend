import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Image, Segment } from 'semantic-ui-react'

class ModalEdit extends Component {

  state = {
    edit:true,
    selectedFile: null,
    description: this.props.idea.description,
    key: this.props.idea.id
  }

  fileSelectHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  //updating the state of the key value of the text area
  updateFormState = (about, value) => {
    this.setState({
      description: value
    })
  }

  handleChange = (e, { value }) => this.setState({ value })

  //updating the about value
  updateAbout = (e) => {
    e.preventDefault();
    this.updateFormState("description",e.target.value)
  }

  //updating the image value
  updateAbout = (e) => {
    e.preventDefault();
    this.updateFormState("image_url",e.target.value)
  }



//this is the PUT
  fileUploadHandler = async () => {
      const response = await fetch(`http://localhost:5000/ideas/${this.props.idea.id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( this.state )
        })
  }

  render() {
    const { value } = this.state
    return (
      <Segment style={{width:1000}}>
        <Form >
          <Image
            type="file"
            src={this.props.idea.image_url}
            size='small'
            wrapped
          />
          <Form.Field
            className="image_url"
            control={TextArea}
            label='image_url'
            placeholder='Upload your image'
            onChange={this.updateAbout}
          />

          <Form.Field
            className="about"
            control={TextArea}
            label='About your idea'
            placeholder='Tell us more about your idea ...'
            onChange={this.updateAbout}
          />
          <Form.Field
            control={Checkbox}
            label='I agree to the Terms and Conditions'
          />
          <Input
            style={{marginTop:25}}
            type="file"
            onChange={this.fileSelectHandler}
            >

          </Input>
          <Form.Field
            style={{marginLeft:400, marginBottom:10, color:'grey'}}
            control={Button}
            onClick={this.fileUploadHandler}
            href='/profile'
            >
          Submit
          </Form.Field>
        </Form>
      </Segment>
    )
  }
}

export default ModalEdit
