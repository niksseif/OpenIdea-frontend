import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const IdeaCard = () => (
  // need to bring source for the image card as src
  <Card>
    <Image src="https://scstylecaster.files.wordpress.com/2014/03/8058cb6fd5c1f5c20bb4d30a2e44bf7a.jpeg?w=700&h=400&crop=1" />
    <Card.Content>
      <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>
)

export default IdeaCard
