import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import IdeaCard from './ideaCard'


//this is the image sourse for the card
// const src = '/images/wireframe/white-image.png'

const IdeaCards = () => (
  <Card.Group itemsPerRow={4}>
    <IdeaCard color='red' image={src} />
    <IdeaCard color='orange' image={src} />
    <IdeaCard color='yellow' image={src} />
    <IdeaCard color='olive' image={src} />
    <IdeaCard color='green' image={src} />
    <IdeaCard color='teal' image={src} />
    <IdeaCard color='blue' image={src} />
    <IdeaCard color='violet' image={src} />
    <IdeaCard color='purple' image={src} />
    <IdeaCard color='pink' image={src} />
    <IdeaCard color='brown' image={src} />
    <IdeaCard color='grey' image={src} />
  </Card.Group>
)

export default IdeaCards
