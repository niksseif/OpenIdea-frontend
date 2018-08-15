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
<<<<<<< HEAD



=======
>>>>>>> c6481a49551d9ef3a1071f84cdb3ca935948a0ea
    getDataFromAPI = async () => {
      // fetch messagesJson
      const usersJson = await fetch('http://localhost:3000/users')
      const ideasJson = await fetch('http://localhost:3000/ideas')
      //add the categories api to the fron end
      // const  categoriesJson = await fetch('http://localhost:3000/categories')
<<<<<<< HEAD
      let users = await usersJson.json();
      let ideas = await ideasJson.json();
=======

      let users = await usersJson.json();
      let ideas = await ideasJson.json();
      // let categories = await categoriesJson.json();
>>>>>>> c6481a49551d9ef3a1071f84cdb3ca935948a0ea

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
          user ={this.state.users === undefined ? null : this.state.users[0] }
         />
        <CategoryCards
          user ={this.state.users === undefined ? null : this.state.users[0] }
          ideas={this.state.ideas}

         />
    </div>
    )
  }
}
export default ProfilePage;
