import React from 'react'
import { Image } from 'semantic-ui-react'

const imageStyle = {
  width: '1300px',
  height: '400px'
};


const ImageExampleFluid = () => <Image
  src='http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/504146-VanGogh.jpg?itok=wuLlzirC&resize=1100x619'
  fluid
  style={imageStyle}
  />

export default ImageExampleFluid
