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
        let publicIdeas = await publicIdeasJson.json(); 
        console.log(publicIdeas,"<<<<public ideas from feed page")
        // const publicIdeasJson = await fetch('https://openidea.herokuapp.com/users', {
        //   method: 'GET',
        //   headers: getHeaders(),
        // })
        let users_id = publicIdeas.forEach((idea)=>{
            return idea.users_id
        })  

        let publicLabel = publicIdeas.forEach((idea) => {
          if (idea.label === 'public'){
            this.setState({
              publicIdeas,
              // user,
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
            user ={this.state.users === undefined ? null : this.state.users[0] }
            publicIdeas={this.state.publicIdeas}
          />
          <FeedList
            users ={this.state.users[0]}
            publicIdeas = {this.state.publicIdeas}
            key= {this.props.id}
          />
        </div>
      )
    }
}
export default FeedPage;
