import React, { Component } from 'react';
import ProfileNav from '../component/profileNav.js'

import CategoryCards from '../component/categoryCards.js'
import { getHeaders, isLoggedIn  } from '../services/services'



const currentUser = localStorage.getItem("currentUser.id")
class ProfilePage extends Component  {
  state = {
    users: [],
    ideas:[],
    categories:[]
  };
  // const localStorageID = localStorage.getItem(currentUser.id)
  //  api = `http://localhost:3000/ideas/${localStorageID}`

  //check if the user is logged in or not if not send them back to landing page
  //remove their token
  componentDidMount = async () => {
    if (!isLoggedIn()){
      window.location = '/'
    }
    await this.getDataFromAPI()
    // window.localStorage.removeItem('currentToken')
  }

  // loading messages from the server
    getDataFromAPI = async () => {
      console.log(currentUser,"<<<<current uzzzzzeeeer");
      // fetch messagesJson
      const usersJson = await fetch('http://localhost:3000/users',{
        method:'GET',
        headers: getHeaders(),
      })
      const ideasJson = await fetch(`http://localhost:3000/ideas/${currentUser}`,{
        method:'GET',
        headers: getHeaders(),
      })
      //add the categories api to the fron end
      // const  categoriesJson = await fetch('http://localhost:3000/categories')


      let users = await usersJson.json();
      let ideas = await ideasJson.json();
      console.log(users[0].id,"<<<users.id from profile page");
      console.log(ideas,"<<<this is what you get from ideas");
      console.log(localStorage,"<<<localstorage from profile");
      // console.log(localStorageID,"<<<<");
      // console.log(ideas.);

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
          user ={this.state.users === undefined ? null : this.state.users[`${currentUser}`] }
         />
        <CategoryCards
          user ={this.state.users === undefined ? null : this.state.users[`${currentUser}`] }
          ideas={this.state.ideas}

         />
    </div>
    )
  }
}
export default ProfilePage;
