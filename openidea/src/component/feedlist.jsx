import React, { Component } from "react";
import Feed from './feed.jsx'
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
    const { publicIdeas, } = this.props;
    

    return(
      <div>
        {publicIdeas.map ((publicIdea) => (

          <Feed
            publicIdea = {publicIdea}
            key={this.props.id}
            name={publicIdea.name}
            userImage={publicIdea.image_url}
          >
          </Feed>
        ))}

      </div>
    );
  }
}

export default FeedList
