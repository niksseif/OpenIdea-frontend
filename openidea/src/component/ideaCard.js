import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const IdeaCard = () => (
  // need to bring source for the image card
  <Card>
    <Image src='' />
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
