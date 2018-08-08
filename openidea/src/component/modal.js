import _ from 'lodash';
import React, { Component } from "react";
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import ModalEdit from './modalEdit.js'

class ModalCard extends Component{
  state= { edit: false }
  render(){
    //setting the props to ide users and categories
    const { idea, users, categories } = this.props

//this function is trigering the state from fals to true one the buttun is clicked
    const onSetEditModal = (e)=>{
      e.preventDefault()
      console.log('on edit true')
      this.setState({edit: true})
      console.log(this.state,"<<<this state");
    }
      return(
          <Modal trigger={<Button>See details</Button>}>
          <Modal.Header>{idea.title}</Modal.Header>
          <Modal.Content image scrolling>
            <Image size='medium' src={idea.image_url} wrapped />

            <Modal.Description>
              <Header>{idea.title}</Header>
              <p> {idea.description}</p>

              {_.times(2, i => (
                <Image key={i} src="" style={{ paddingBottom: 5 }} />
              ))}
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button primary >
              Edit <Icon name='chevron right' onClick={onSetEditModal}/>
            </Button>
          </Modal.Actions>

        </Modal>

      )
  }
}
export default ModalCard
