import React, { Component } from "react";
import { Card, Icon, Image,Accordion } from 'semantic-ui-react'
import { Collapse, Button, CardBody } from 'reactstrap';
import Modal from './modal'
// import '../ideaCardStyle.css'

class CategoryCard extends Component {
// state of the collaps before on clicking
  state = { activeIndex: null }


  render(){

    //setting the state to active index
    const {activeIndex} = this.state
    // console.log(this.state,"this is the state on the card pls work");
    const { idea, users, categories, setIndex } = this.props
    return(
      <div>
      <Card >
          <Image src={idea.image_url} />
              <Card.Content >
                <Card.Header>{idea.title}</Card.Header>
                <Card.Meta>Joined in 2018</Card.Meta>
                <Card.Description >{idea.description}</Card.Description>
              </Card.Content>
            <Accordion>
                <Button  active={activeIndex === null} index={0} onClick={() => setIndex( )}>

                    Edit your idea</Button>

            </Accordion>

      </Card>
      {this.props.showDescription &&
        <Modal
        trigger={<Button>See details</Button>}
        idea={idea}
        users={users}

      />
      }
    </div>
    )
  }
}

export default CategoryCard;
{/* <Accordion>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          What is a dog?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
            be found as a welcome guest in many households across the world.
          </p>
        </Accordion.Content> */}
