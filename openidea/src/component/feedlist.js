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
    const { usersIdeas,users } = this.props;
    console.log(users,"<<<users from feedlist");

    return(
      <div>
        {usersIdeas.map ((usersIdea, user) => (

          <Feed
            usersIdea = {usersIdea}
            key={usersIdea.id}
            name={usersIdea.name}
            usersImage={users.image_url}
          >
          </Feed>
        ))}

      </div>
    );
  }
}

export default FeedList
