import React from 'react'
import { Image } from 'semantic-ui-react'
import landingpageImage from '../landingpage3.png'



const imageStyle = {
  width: '100%',
  height: '400px'
};
const headerStyle={
  fontWeight: 'bold',
  fontcolor:'black',
  fontSize:'30px'
}

const top = {
    position: 'absolute',
    top: '150px',
    left: '90px',
    fontWeight: 'bold',
    color:'white',
    fontSize:'60px'
}
const ImageExampleFluid = () => (
  <div className='container'>
    <Image
      src={landingpageImage}
      fluid
      style={imageStyle}
      />
        <h1 style={top}>Open Idea</h1>
</div>
)

export default ImageExampleFluid
