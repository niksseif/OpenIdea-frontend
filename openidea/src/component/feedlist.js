import React, { Component } from "react";
import Feed from './feed.js'
import { Card, Icon, Image,Grid } from 'semantic-ui-react'




class FeedList extends Component  {

    state = { activeIndex: null }
    //seting the index of the card to active index to trigger the modal
    setIndex = (activeIndex) => {
      if(this.state.activeIndex === activeIndex) {
        this.setState({activeIndex: null})
      } else {
        this.setState({activeIndex})
      }
     this.setState({showDescription: 3})
    }

  render(){
    const { usersIdeas } = this.props;
    console.log(usersIdeas,"<<<ideas from feedlist");
    return(
      <div>

        {usersIdeas.map ((usersIdea) => (
        
          <Feed
            usersIdea = {usersIdea}
            key={usersIdea.id}
          >
          </Feed>
        ))}

      </div>
    );
  }
}

export default FeedList
