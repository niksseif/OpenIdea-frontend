import React, { Component } from 'react';
import ProfileNav from '../component/profileNav.js'
import FeedList from '../component/feedlist.js'
import { getHeaders } from '../services/services'

const currentUser = localStorage.getItem("currentUser.id")
class FeedPage extends Component  {
  state ={
    usersIdeas:[],
    ideas:[],
    users:[]
  }
  //Connect to backend to grab API
    componentDidMount = async () => {
      await this.getDataFromAPI()
    }
  // loading messages from the server
    getDataFromAPI = async () => {

// fetch 1 user public ideas
      const usersIdeasJson = await fetch(`http://localhost:3000/users/${1}/ideas`)
//fetch all the public ideas from the users
      const ideasJson = await fetch(`http://localhost:3000/ideas/1`,{
        method:'GET',
        headers: getHeaders(),
      })
//fetch users
      const usersJson = await fetch('http://localhost:3000/users',{
        method:'GET',
        headers: getHeaders(),
      })
      let users = await usersJson.json();
      console.log(users,"<<<<usersfrom feed page");
      let usersIdeas = await usersIdeasJson.json();
      let ideas = await ideasJson.json();

      this.setState({
        usersIdeas,
        ideas,
        users
      })
    }

  render(){
    return(
      <div>
        <ProfileNav
          user ={this.state.users === undefined ? null : this.state.users[0] }
          usersIdeas={this.usersIdeas}

        />
        <FeedList
          users ={this.state.users}
          usersIdeas = {this.state.usersIdeas}


         />
    </div>
    )
  }
}
export default FeedPage;
