
import React, { Component } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import IdeaCard from './categoryCard'


class CategoryCards extends Component  {

  render(){
    const { users, ideas, categories }= this.props;
    return(
      <Card.Group itemsPerRow={4} >
        {/* //mapping through the ideas to creat the cards for the landing page  */}
        {ideas.map(idea => (
          // the key is the id of the idea to not get the child error;
          <IdeaCard
            idea = {idea}
             key={idea.id}
             name={idea.title}
             color={idea.color}
             image={idea.image_url}
             description={idea.description}/>
        ))}

      </Card.Group>
    );
  }
}

export default CategoryCards
