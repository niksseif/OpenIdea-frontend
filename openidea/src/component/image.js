import React from 'react'
import { Image } from 'semantic-ui-react'

const imageStyle = {

  opacity: '0.5',
  filter: 'alpha(opacity=50)'


  width: '1300px',
  height: '400px'

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

      src='http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/504146-VanGogh.jpg?itok=wuLlzirC&resize=1100x619'

      fluid
      style={imageStyle}
      />
</div>
)

export default ImageExampleFluid
