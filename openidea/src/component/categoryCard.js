import React, { Component } from "react";
import { Card, Icon, Image,Accordion } from 'semantic-ui-react'
import { Collapse, Button, CardBody } from 'reactstrap';
import ModalCard from './modal'
// import '../ideaCardStyle.css'

class CategoryCard extends Component {
// state of the collaps before on clicking
  state = { modal: false }


  render(){
    const onSetModalTrue =(e)=>{
      e.preventDefault()
      console.log('on Modal true')
      this.setState({modal: true})
      console.log(this.state,"<<<this state");
    }

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
                <ModalCard
                  onClick={onSetModalTrue}
                  idea={idea}
                  users={users}
                />
              </Accordion>
        </Card>
    </div>
    )
  }
}

export default CategoryCard;
