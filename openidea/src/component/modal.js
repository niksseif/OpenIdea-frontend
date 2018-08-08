import _ from 'lodash';
import React, { Component } from "react";
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

class ModalScrollingExample extends Component{
  render(){
    const { idea, users, categories } = this.props
      return(
          <Modal trigger={<Button>See details</Button>}>
          <Modal.Header>{idea.title}</Modal.Header>
          <Modal.Content image scrolling>
            <Image size='medium' src={idea.image_url} wrapped />

            <Modal.Description>
              <Header>{idea.title}</Header>
              <p> {idea.description}</p>

              {_.times(8, i => (
                <Image key={i} src='/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
              ))}
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button primary>
              Edit <Icon name='chevron right' />
            </Button>
          </Modal.Actions>
        </Modal>
      )
  }
}
export default ModalScrollingExample
