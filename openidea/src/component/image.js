import React from 'react'
import { Image } from 'semantic-ui-react'

const imageStyle = {
  opacity: '0.5',
  filter: 'alpha(opacity=50)'

};
const headerStyle={
  fontWeight: 'bold',
  fontcolor:'black',
  fontSize:'40px'
}

const ImageExampleFluid = () => (
  <div className='container'>
    <h1 style={headerStyle}>Open Idea</h1>
    <Image
      src='https://images.unsplash.com/photo-1533762385849-5aa14c83dbaf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=040eec84d37ae33312c1bda4d0dfb0f6&auto=format&fit=crop&w=1392&q=80'
      fluid
      style={imageStyle}
      />
</div>
)

export default ImageExampleFluid
