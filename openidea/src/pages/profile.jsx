import React, { Component } from 'react';
import ProfileNav from '../component/profileNav.js'

import CategoryCards from '../component/categoryCards.js'



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

  // fetch ideasJson,users and  categories
      const ideasJson = await fetch('http://localhost:3000/ideas')
      const usersJson = await fetch('http://localhost:3000/users')
      const categoriesJson = await fetch('http://localhost:3000/categories')

      let ideas = await ideasJson.json();
      let users = await usersJson.json();
      let categories = await categoriesJson.json();

      this.setState({
        ideas,
        users,
        categories
      })
    }
    //these functions are for callapsing the idea card with all the data in it

  render(){
    return(
      <div>
        {/*  This will be the logged in user getting passed in to the Profile */}
      <ProfileNav
        user ={this.state.users === undefined ? null : this.state.users[0] }
       />
      <CategoryCards
        user ={this.state.users === undefined ? null : this.state.users[0] }
        ideas={this.state.ideas}
        categories ={this.state.categories}



       />
    </div>
    )
  }
}
export default ProfilePage;
