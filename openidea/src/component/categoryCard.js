import React, { Component } from "react";
import { Card, Icon, Image,Accordion } from 'semantic-ui-react'
import { Collapse, Button, CardBody } from 'reactstrap';
import ModalCard from './modal'
import ModalEdit from './modalEdit.js'

// import '../ideaCardStyle.css'

class CategoryCard extends Component {
// state of the collaps before on clicking
  state = {
    modal: false,
    edit: false
  }


  render(){
    //this is a function to check if the model is clicked
    const onSetModalTrue =(e)=>{
      e.preventDefault()
      // console.log('on Modal true')
      this.setState({modal: true})

    }


    //setting the state to active index
    const {activeIndex} = this.state
    const { idea, users, categories, setIndex } = this.props

    // console.log(idea, "idea from category card");
    return(
      <div>
        <Card >
          <Image src={idea.image_url}/>
           <Card.Content >
              <Card.Header>{idea.title}</Card.Header>
                <Card.Meta>Joined in 2018</Card.Meta>
                  <Card.Description >{idea.description}</Card.Description>
              </Card.Content>
              <Accordion>

                <ModalCard
                  onClick={onSetModalTrue}
                  idea={idea}
                  users={this.users}
                  categories={this.categories}
                  key={idea.id}
                />

              </Accordion>
        </Card>
    </div>
    )
  }
}

export default CategoryCard;
