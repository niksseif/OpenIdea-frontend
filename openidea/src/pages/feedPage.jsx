import React, { Component } from 'react';
import ProfileNav from '../component/profileNav'
import FeedList from '../component/feedlist.jsx'
import { getHeaders } from '../services/services'


class FeedPage extends Component  {
  state = {
    publicIdeas:[],
    users:[]
  }
    //Connect to backend to grab API
    componentDidMount = async () => {
      await this.getDataFromAPI()
    }

    // loading messages from the server
    getDataFromAPI = async () => {
      try{
        const publicIdeasJson = await fetch('http://localhost:5000/ideas',{
            method:'GET',
            headers: getHeaders(),
          })
        let publicIdeas = await publicIdeasJson.json(); 

        let users_id = publicIdeas.forEach((idea)=>{
            return idea.users_id
        })  

        let publicLabel = publicIdeas.forEach((idea) => {
          if (idea.label === 'public'){
            this.setState({
              publicIdeas,
              users_id
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
            user ={this.state.users_id === undefined ? null : this.state.users_id }
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
