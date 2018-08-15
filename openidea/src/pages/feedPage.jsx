import React, { Component } from 'react';
import ProfileNav from '../component/profileNav.js'
import FeedList from '../component/feedlist.js'



class FeedPage extends Component  {
  state ={
    usersIdeas:[]
  }
  //Connect to backend to grab API
    componentDidMount = async () => {
      await this.getDataFromAPI()
    }
  // loading messages from the server
    getDataFromAPI = async () => {
      // fetch messagesJson
      const usersIdeasJson = await fetch(`http://localhost:3000/users/${1}/ideas`)
      // console.log(usersIdeasJson,"<<<after usersIdeas fetch");
      let usersIdeas = await usersIdeasJson.json();
      console.log(usersIdeas,"<<<<<usersIDeas");
      this.setState({
        usersIdeas,
      })
    }

  render(){
    return(
      <div>
        <ProfileNav
          usersIdeas={this.usersIdeas}

        />
        <FeedList
          // user ={this.state.users === undefined ? null : this.state.users[0] }
          usersIdeas = {this.state.usersIdeas}


         />
    </div>
    )
  }
}
export default FeedPage;
