
import React, { Component } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import IdeaCard from './ideaCard'


//this is the image sourse for the card
const src = 'https://scstylecaster.files.wordpress.com/2014/03/8058cb6fd5c1f5c20bb4d30a2e44bf7a.jpeg?w=700&h=400&crop=1'

class IdeaCards extends Component  {
  state = {
    ideas: [
      { id: 1, title: "sketch", color: "red", image:'https://i.pinimg.com/564x/8c/f0/60/8cf06020e82ca94ddd8f65b990e84621.jpg', description:'this is my first ide about what i like to make' },
      { id: 2, title: "photography", color: "blue", image:'https://i.pinimg.com/564x/d2/f6/06/d2f606c5bd27ef8ee95c1252da7cd6f4.jpg', description:'this is my first ide about what i like to make'},
      { id: 3, title: "robotic", color: "red",image:'https://i.pinimg.com/564x/41/c8/d7/41c8d7be885cd2821a0c43a2dfe07fa4.jpg', description:'this is my first ide about what i like to make' },
      { id: 4, title: "fashion", color: "red",image:'https://i.pinimg.com/564x/8f/11/8f/8f118fe702c76fb7d5eea5aa803c2f3e.jpg', description:'this is my first ide about what i like to make' }

    ]
  };

  render(){

    return(
      <Card.Group itemsPerRow={4}>
        {this.state.ideas.map(idea => (
          // the key is the id of the idea to not get the child error;
          <IdeaCard key={idea.id} name={idea.title} color={idea.color} image={idea.image} description={idea.description}/>
        ))}

      </Card.Group>
    );
  }
}

export default IdeaCards
