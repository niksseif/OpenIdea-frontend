import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Image,Segment } from 'semantic-ui-react'

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
      <Segment style={{ backgroundColor:'lightgrey',marginTop:100}}>
      <Form>
        <Image
          type="file"
          src={this.props.idea.image_url}
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
