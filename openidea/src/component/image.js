import React from 'react'
import { Image } from 'semantic-ui-react'

const imageStyle = {
  width: '1500px',
  height: '300px'
};


const ImageExampleFluid = () => <Image
  src='https://ak6.picdn.net/shutterstock/videos/17439916/thumb/1.jpg'
  fluid
  style={imageStyle}
  />

export default ImageExampleFluid
