import React, { Component } from 'react';
import Navbar from '../component/navbar'
import ImageExampleFluid from '../component/imageExampleFluidHeader'
import IdeaCards from '../component/ideaCards'
import landingpageImage from '../landingPage2.png'


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
      const ideasJson = await fetch('https://openidea-python.herokuapp.com/ideas')
      let ideas = await ideasJson.json()
    //  filter the public ideas to display at the landing page
      let label = ideas.forEach((idea) => {
        // console.log(idea.label,"<<<label")
        if(idea.label === 'public'){
          this.setState({
            ideas,
          })
          return idea.label
        }
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
