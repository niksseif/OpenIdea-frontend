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
      let id = currentUserId()
      const usersJson = await fetch(`https://openidea-python.herokuapp.com/user/${id}/ideas`,{
        method:'GET',
        headers: getHeaders(),
      })
      let users = await usersJson.json();
      
      console.log(id,"<<<<id from profile")
      console.log(users,"<<users from profile page")
      // console.log(id, "<<usersId")

      let ideas = users.ideas
      // let id = users.id
     

      this.setState({
         users,
         ideas,
         id  
      })
    }
    //these functions are for callapsing the idea card with all the data in it

  render(){
    const {id } = this.props
    return(
      <div>
          {/*  This will be the logged in user getting passed in to the Profile */}
        <ProfileNav
          users ={this.state.users === undefined ? null : this.state.users }
         />
        <CategoryCards
          users ={this.state.users === undefined ? null : this.state.users[id] }
          ideas={this.state.ideas === undefined ? null : this.state.ideas}
          key = {this.props.id}
        />
      </div>
    )
  }
}
export default ProfilePage;
