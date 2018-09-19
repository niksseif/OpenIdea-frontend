import React, { Component } from 'react';
import ProfileNav from '../component/profileNav'

import CategoryCards from '../component/categoryCards'
import { getHeaders, isLoggedIn,currentUserId  } from '../services/services'



//getting the current user id from the local storage
//assigning the id to the api to fetch the ideas
// const currentUser = localStorage.getItem("currentUser.id")
// const localStorageID = localStorage.getItem(currentUser.id)
// const api = `http://localhost:5000/ideas/${localStorageID}`


class ProfilePage extends Component  {
  state = {
    users: [],
    ideas:[],
    id:currentUserId()
  };


  //check if the user is logged in or not if not send them back to landing page
  //remove their token
  componentDidMount = async () => {
    if (!isLoggedIn()){
      window.location = '/'
      window.localStorage.removeItem('access_token')
      window.localStorage.removeItem('refresh_token')
    }
    await this.getDataFromAPI()
  }

  // loading messages from the server
    getDataFromAPI = async () => {
      // fetch usersJson
      const usersJson = await fetch(`https://openidea-python.herokuapp.com/user/${currentUserId()}/ideas`,{
        method:'GET',
        headers: getHeaders(),
      })
      
      let id = currentUserId()
      let users = await usersJson.json();
      console.log(users,"<<<users from profile page")
      console.log(users, "<<<users from profile page")

      let ideas = users.ideas
      console.log(ideas,"<<<ideas")
      
     

      this.setState({
         users,
         ideas,
         id:currentUserId()
      })
    }
    //these functions are for callapsing the idea card with all the data in it

  render(){
    return(
      <div>
          {/*  This will be the logged in user getting passed in to the Profile */}
        <ProfileNav
          key ={this.state.id === undefined ? null : this.state.id }
          users= {this.state.users === undefined ? null : this.state.users}
         />
        <CategoryCards
          users ={this.state.users === undefined ? null : this.state.users[0] }
          ideas={this.state.ideas}
          key = {this.props.id}
        />
      </div>
    )
  }
}
export default ProfilePage;
