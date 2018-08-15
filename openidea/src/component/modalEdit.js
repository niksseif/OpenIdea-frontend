import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Image } from 'semantic-ui-react'

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
  updateFormState = (about, value) =>{
    // console.log(key, value, 'name and value')
    this.setState({
      description: value
    })
  }
  handleChange = (e, { value }) => this.setState({ value })

  //updating the about value
 updateAbout = (e) => {
    // console.log("i am the value of the about");
    e.preventDefault()
    this.updateFormState("description",e.target.value)
  }

  //updating the image value
  updateAbout = (e) => {
    // console.log("i am the value of the about");
    e.preventDefault()
    this.updateFormState("image_url",e.target.value)
  }



//this is the PUT
  fileUploadHandler = async () => {
      console.log("User form state :", this.state )
      const response = await fetch(`http://localhost:3000/ideas/${this.props.idea.id}`, {
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
    // const { value,  } = this.state
    console.log("this is idea from modal edit", this.props.idea);
    return (
      <Form>
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
          // defaultValue={this.props.idea.description}
        />

        <Form.Field
          className="about"
          control={TextArea}
          label='About your idea'
          placeholder='Tell us more about you...'
          onChange={this.updateAbout}
          // defaultValue={this.props.idea.description}
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
          <Button />
        </Form.Field>


        <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
        <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

export default ModalEdit
