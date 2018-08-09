import _ from 'lodash';
import React, { Component } from "react";
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import ModalEdit from './modalEdit.js'

class ModalCard extends Component{
  state= { edit: false }

  //this function is trigering the state from fals to true one the buttun is clicked
  render(){
    const onSetEditModal = (e) => {
      e.preventDefault()
      console.log('on edit true')
      this.setState({edit: true})
      console.log(this.state,"<<<this state");
    }

    //setting the props to ide users and categories
    // const { idea, users, categories } = this.props

      return(
        <div>
          {/* <Modal trigger={<Button>See details</Button>}> */}
            {this.state.edit === true ? this.renderEditMode()
            : this.renderDisplayMode ()}
          {/* </Modal> */}
        </div>
      )
      }

    renderDisplayMode (){
          return (
            <Modal trigger={<Button>See details</Button>}>
            <Modal.Header>{this.props.idea.title}</Modal.Header>
            <Modal.Content image scrolling>
              <Image size='medium' src={this.props.idea.image_url} wrapped />

              <Modal.Description>
                <Header>{this.props.idea.title}</Header>
                <p> {this.props.idea.description}</p>

                {_.times(2, i => (
                  <Image key={i} src="" style={{ paddingBottom: 5 }} />
                ))}
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary >
                Edit <Icon name='chevron right' />
              </Button>
            </Modal.Actions>

          </Modal>
        )
      }
        renderEditMode () {
          return (
            <ModalEdit />
          )
        }

}
export default ModalCard
