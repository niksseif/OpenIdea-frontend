
import React, { Component } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import IdeaCard from './ideaCard'


//this is the image sourse for the card
// const src = 'https://scstylecaster.files.wordpress.com/2014/03/8058cb6fd5c1f5c20bb4d30a2e44bf7a.jpeg?w=700&h=400&crop=1'

class IdeaCards extends Component  {

  render(){
    console.log(this.props,"<<<<<<");
    return(
      <Card.Group itemsPerRow={4}>
        {/* //mapping through the ideas to creat the cards for the landing page  */}
        {this.props.ideas.map(idea => (
          // the key is the id of the idea to not get the child error;
          <IdeaCard
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

export default IdeaCards
