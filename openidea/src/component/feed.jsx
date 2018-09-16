import React, { Component } from 'react';
import { Image, Rail, Segment, Menu, Card } from 'semantic-ui-react';
import { Container, Row, Col } from 'reactstrap';
import PublicLabel from './publicLabel';

const imageStyle = {
  width: '450px',
  height: '450px',

};
class Feed extends Component {
  render() {
    const { publicIdea, userImage } = this.props;
    return (
      <div
        center
        className="ui compact segment"
        style={{ marginLeft: 450 }}
      >
        <Segment >
          <Image
            style={imageStyle}
            src={userImage}
          />
            <Rail
              internal
              position="left"
            >
              <Segment>
                  {publicIdea.title}
                </Segment>
            </Rail>

              <Segment
                  style={{ width: 450 }}
                >
                  {publicIdea.description}
                </Segment>
                  <PublicLabel />
        </Segment>
      </div>
    );
  }
}
export default Feed;
