import React, { Component } from 'react';
import IdeaCard from './ideaCard';
// import StackGrid from 'react-stack-grid';
import { Grid, GridColumn } from 'semantic-ui-react';

class IdeaCards extends Component {
  render() {
    return (
      // <StackGrid
      <Grid
        style={{ paddingLeft: '8vw', position: 'center' }}
        columns={6}
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

      </Grid>
      // {/* </StackGrid> */}

    );
  }
}

export default IdeaCards;
