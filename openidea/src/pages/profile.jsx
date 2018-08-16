import React, { Component } from 'react';
import ProfileNav from '../component/profileNav.js'

import CategoryCards from '../component/categoryCards.js'
import { getHeaders } from '../services/services'


class ProfilePage extends Component  {
  state = {
    users: [],
    ideas:[],
    categories:[]
  };
  //Connect to backend to grab API
    componentDidMount = async () => {
      await this.getDataFromAPI()
    }
  // loading messages from the server
    getDataFromAPI = async () => {
      // fetch messagesJson
      const usersJson = await fetch('http://localhost:3000/users',{
        method:'GET',
        headers: getHeaders(),
      })
      const ideasJson = await fetch(`http://localhost:3000/ideas/`,{
        method:'GET',
        headers: getHeaders(),
      })
      //add the categories api to the fron end
      // const  categoriesJson = await fetch('http://localhost:3000/categories')


      let users = await usersJson.json();
      let ideas = await ideasJson.json();
      // let categories = await categoriesJson.json();

      this.setState({
        ideas,
        users,
      })
    }
    //these functions are for callapsing the idea card with all the data in it

  render(){
    return(
      <div>
          {/*  This will be the logged in user getting passed in to the Profile */}
        <ProfileNav
          user ={this.state.users === undefined ? null : this.state.users }
         />
        <CategoryCards
          user ={this.state.users === undefined ? null : this.state.users }
          ideas={this.state.ideas}

         />
    </div>
    )
  }
}
export default ProfilePage;
