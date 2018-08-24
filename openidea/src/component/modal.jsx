import _ from 'lodash';
import React, { Component } from "react";
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import ModalEdit from './modalEdit'

class ModalCard extends Component{
  state= {
    edit: false,
  }

  //this is the function for toggling between two state edit
  toggleEdit = (e) => {
    e.preventDefault();
    this.setState({ edit :!this.state.edit })
  }
  //if the edit state is false just show modal
  render(){
    if(!this.state.edit) {
          return (
            <Modal
              trigger={<Button>check idea</Button>}
              style={{marginBottom:10}}
            >
            <Modal.Header>{this.props.idea.title}</Modal.Header>
            <Modal.Content image scrolling>
              <Image size='medium' src={this.props.idea.image_url} wrapped />
              <Modal.Description>
                <Header>{this.props.idea.title}</Header>
                <p> {this.props.idea.description}</p>
                {_.times(2, i => (
                  <Image key={i} src="" style={{ paddingBottom: 5 }}/>
                ))}
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button
                style={{color:'grey'}}
                onClick={this.toggleEdit}
                >
                Edit <Icon name='chevron right'/>
              </Button>
            </Modal.Actions>
          </Modal>
        )} else {
          return (
            <Modal>
                <Modal.Header>{this.props.idea.title}</Modal.Header>
                <Modal.Content image scrolling>
                <ModalEdit
                  idea={this.props.idea}
                  user={this.user}
                  key={this.props.idea.id}
                />
                </Modal.Content>
            </Modal>
          )
        }

      }

}


export default ModalCard
