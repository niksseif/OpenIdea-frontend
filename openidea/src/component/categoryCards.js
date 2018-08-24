
import React, { Component } from "react";
import { Card, Icon, Image,Grid } from 'semantic-ui-react'
import IdeaCardForProfile from './categoryCard'


class CategoryCards extends Component  {

    state = { activeIndex: null }
    //seting the index of the card to ictive index to trigger the modal
    setIndex = (activeIndex) => {
      // console.log("is this true or false", activeIndex === this.state.activeIndex);
      // console.log("activeIndex", activeIndex, "state.activeIndex", this.state.activeIndex);
      if(this.state.activeIndex === activeIndex) {
        this.setState({activeIndex: null})
      } else {

        this.setState({activeIndex})
      }
     this.setState({showDescription: 3})
    }

  render(){
    const { users, ideas, categories,  }= this.props;
    return(
      <Card.Group itemsPerRow={4} style={{marginTop:5, marginLeft:10,marginRight:10}} >
        {/* //mapping through the ideas to creat the cards for the landing page  */}
        {ideas.map((idea,idx,categories,users ) => (
          // the key is the id of the idea to not get the child error;
          <IdeaCardForProfile
            idea = {idea}
             key={idea.id}
             name={idea.title}
             color={idea.color}
             image={idea.image_url}
             description={idea.description}
             setIndex={() => this.setIndex(idx)}
             showDescription={this.state.activeIndex === idx }
             categoriesTitle={categories.title}
             users={users}


           />
        ))}

      </Card.Group>
    );
  }
}

export default CategoryCards
