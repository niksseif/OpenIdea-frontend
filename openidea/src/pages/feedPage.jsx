import React, { Component } from 'react';
import ProfileNav from '../component/profileNav'
import FeedList from '../component/feedlist.jsx'
import { getHeaders, isLoggedIn, currentUserId } from '../services/services'



class FeedPage extends Component  {
  state = {
    publicIdeas:[],
    user:[]
  }
    //Connect to backend to grab API
    componentDidMount = async () => {
      await this.getDataFromAPI()
    }

    // loading messages from the server
    getDataFromAPI = async () => {
      try{
        const publicIdeasJson = await fetch('https://openidea-python.herokuapp.com/ideas',{
            method:'GET',
            headers: getHeaders(),
          })
        const usersJson = await fetch('https://openidea.herokuapp.com/users', {
          method: 'GET',
          headers: getHeaders(),
        })
        let user = await usersJson.json();
        let publicIdeas = await publicIdeasJson.json();  
        console.log(publicIdeas,"<<<publicIdeas from feed page")
        console.log(user,"<<<<userzzzzz")
 
        let publicLabel = publicIdeas.forEach((idea) => {
          if (idea.label === 'public'){
            this.setState({
              publicIdeas,
              user
            })
          }
        })       
       
      } catch (err){
        throw(err,"You don't have access to the public ideas")
      }
    }
    render(){
      return(
        <div>
          <ProfileNav
            users ={this.state.user[0]}
            publicIdeas={this.state.publicIdeas}
          />
          <FeedList
            users ={this.state.users_id}
            publicIdeas = {this.state.publicIdeas}
            key= {this.props.id}
          />
        </div>
      )
    }
}
export default FeedPage;
