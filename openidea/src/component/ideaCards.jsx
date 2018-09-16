import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import IdeaCard from './ideaCard';
import StackGrid from 'react-stack-grid';

class IdeaCards extends Component {
  render() {
    return (
      <StackGrid
        columnWidth={300}
      >
        {this.props.ideas.map(idea => (
          <IdeaCard
            key={idea.id}
            name={idea.title}
            color={idea.color}
            image={idea.image_url}
            description={idea.description}
          />
        ))}
      </StackGrid>

    );
  }
}

export default IdeaCards;
