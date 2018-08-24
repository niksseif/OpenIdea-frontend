import React, { Component } from "react";
import { Icon, Label,Button } from 'semantic-ui-react'
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
class LabelPublic extends Component {
    state = {
      clicks: 1,
    }

IncrementItem = () => {
  console.log("you are clicking me");
  this.setState({ clicks: this.state.clicks + 1 });
  }
  render(){
  return(
      <div >
        <Label
          as='a'
          color={colors[2]}
          >
          Public
          <Icon name='public' />
        </Label>
        <Label
          color={colors[1]}
          as='a'
          onClick={this.IncrementItem}

          >
          Vote
          <Label.Detail
            color={colors[1]}
            onClick={this.IncrementItem}
          >
              {this.state.clicks}
          </Label.Detail>
          <Icon name='vote' color='blue'/>
        </Label>
      </div>
    )
  }
}
export default LabelPublic;
