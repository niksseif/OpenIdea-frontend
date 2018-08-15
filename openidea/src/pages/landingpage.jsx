import React, { Component } from 'react';
// import logo from './logo.svg';

import Navbar from '../component/navbar'
import ImageExampleFluid from '../component/image'
import IdeaCards from '../component/ideaCards.js'
import logo from '../logo.svg';
import landingpageImage from '../landingpage1.png'


class landingpage extends Component  {
  state = {
    ideas: []
  };
  //Connect to backend to grab API
    componentDidMount = async () => {
      await this.getDataFromAPI()
    }
  // loading messages from the server
    getDataFromAPI = async () => {
  // fetch messagesJson
      const ideasJson = await fetch('http://localhost:3000/ideas')
      let ideas = await ideasJson.json()


      this.setState({
        ideas,
      })
    }
  render(){


    return(

      <div>
        <ImageExampleFluid
        landingpageImage ={landingpageImage}/>
        <Navbar />
        <IdeaCards
        ideas={this.state.ideas} />
      </div>
    )
  }
}
export default landingpage;
