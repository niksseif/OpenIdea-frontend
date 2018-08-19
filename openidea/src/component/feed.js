import React, { Component } from "react";
import { Image, Rail, Segment,  Menu, Card } from 'semantic-ui-react'
import { Container,Row,  Col } from 'reactstrap'
import PublicLabel from './publicLabel'

const imageStyle = {
  width: '450px',
  height: '450px'

};
const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]
class Feed extends Component  {


  render(){
    const { usersIdea } = this.props
      console.log(usersIdea,"<<<<usersIdea from the feed")
    return(
      <div
        center className="ui compact segment"
        style={{ marginLeft:450}}
        >
      <Segment
        exterasmall
        textAlign='center'
        >
      <Image
        style={imageStyle}
        src={usersIdea.image_url}
      />
      <Rail
         internal position='left'
         >
        <Segment>
          {usersIdea.title}
        </Segment>
      </Rail>

      <Segment
        style={{ width:450}}>
        {usersIdea.description}
      </Segment>
      <PublicLabel />

    </Segment>
  </div>
    )
  }
}

export default Feed
