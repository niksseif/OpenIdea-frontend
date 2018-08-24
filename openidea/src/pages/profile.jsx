import React, { Component } from 'react';
import ProfileNav from '../component/profileNav'

import CategoryCards from '../component/categoryCards'
import { getHeaders, isLoggedIn  } from '../services/services'


//getting the current user id from the local storage
//assigning the id to the api to fetch the ideas
// const currentUser = localStorage.getItem("currentUser.id")
// const localStorageID = localStorage.getItem(currentUser.id)
// const api = `http://localhost:3000/ideas/${localStorageID}`


class ProfilePage extends Component  {
  state = {
    users: [],
    ideas:[],
    categories:[]
  };


  //check if the user is logged in or not if not send them back to landing page
  //remove their token
  componentDidMount = async () => {
    if (!isLoggedIn()){
      // window.location = '/'
      window.localStorage.removeItem('currentToken')
      window.localStorage.removeItem('currentUser.id')
    }
    await this.getDataFromAPI()
  }

  // loading messages from the server
    getDataFromAPI = async () => {
      // console.log(currentUser,"<<<<current uzzzzzeeeer");
      // fetch usersJson
      const usersJson = await fetch('https://openidea.herokuapp.com/users',{
        method:'GET',
        headers: getHeaders(),
      })
      const ideasJson = await fetch(`https://openidea.herokuapp.com/ideas/1`,{
        method:'GET',
        headers: getHeaders(),
      })

      //this is for getting the current user ideas for the api
      const specideasJson = await fetch(`https://openidea.herokuapp.com/ideas`,{
        method:'GET',
        headers: getHeaders(),
      })

      //add the categories api to the the profile page
      //@ future features
      // const  categoriesJson = await fetch('http://localhost:3000/categories')


      let users = await usersJson.json();
      let ideas = await ideasJson.json();
      let specideas = await specideasJson.json();

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
          genIdeas={this.state.genIdeas}
        />
      </div>
    )
  }
}
export default ProfilePage;
