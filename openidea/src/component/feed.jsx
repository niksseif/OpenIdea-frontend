import React, { Component } from 'react';
import { Image, Rail, Segment, Menu, Card } from 'semantic-ui-react';
import { Container, Row, Col } from 'reactstrap';
import PublicLabel from './publicLabel';

const imageStyle = {
  width: '400px',
  height: '400px',

};
class Feed extends Component {
  render() {
    const { publicIdea, userImage } = this.props;
    return (
      <div
        className="ui compact segment"
        style={{ display: 'flex', justifyContent: 'center' }}
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
