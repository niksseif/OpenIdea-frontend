import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const IdeaCard = props => (
  // need to bring source for the image card as src
  <Card>
    <Image src={props.image} />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
          <Card.Meta>Joined in 2018</Card.Meta>
            <Card.Description>{props.description}</Card.Description>
      </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
        10 Friends
          </a>
        </Card.Content>
  </Card>
);

export default IdeaCard;
