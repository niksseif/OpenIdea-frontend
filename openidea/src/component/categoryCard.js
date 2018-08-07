import React, { Component } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

class CategoryCard extends Component {
  state={
    open:true
  }
  render(){
    const { idea, users, categories } = this.props
    return(
        <Card>
          <Image src={idea.image_url} />
            <Card.Content >
              <Card.Header>{idea.title}</Card.Header>
              <Card.Meta>Joined in 2018</Card.Meta>
              <Card.Description >{idea.description}</Card.Description>
            </Card.Content>
          <Card.Content extra>
            <div className="ui styled accordion">
              <div className='active title'>
                <a expanded={this.state.open} onClick={() => this.setState({ open: !this.state.open })}>
                  <i className="dropdown icon" ></i>
                    <Icon name='user' />
                      Show
                </a>
              </div>
            </div>
              <Panel className="active content">
                  Write about your idea.
              </Panel>

          </Card.Content>
        </Card>
    )
  }
}

export default CategoryCard;
