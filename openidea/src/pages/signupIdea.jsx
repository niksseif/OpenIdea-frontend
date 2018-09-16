import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import IdeaCreation from '../component/ideaCreation'
import { getHeaders, signup, createIdea,currentUserId } from '../services/services';
import Background from '../form.png';




class IdeaForm extends Component {
    state = {
        users_id:currentUserId(),
        title: '',
        description: '',
        image_url: '',
        label: '',
        vote: ''
    };


    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        console.log("you are hiting the fetch function on the signupIdea form page");
        const { users_id,title, description, image_url, label, vote } = this.state
        createIdea({ title, description, image_url, label, vote })
            .then((data) => {
                console.log('response data coming backkkkk:', data)
            })
            .then(this.setState({
                users_id:currentUserId(),
                title: '',
                description: '',
                image_url: '',
                label: '',
                vote:''
            }))
    }


    render() {
        return (
            <Segment style={{ marginTop: 150, marginLeft: 50, marginRight: 50, backgroundImage: "url(" + { Background } + ")" }}>
                <IdeaCreation
                    // response={this.response}
                    users_id = {this.state.users_id}
                    title={this.state.title}
                    description={this.state.description}
                    image_url={this.state.image_url}
                    label={this.state.label}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    vote={this.vote}

                />
            </Segment>
        )
    }
}
export default IdeaForm;