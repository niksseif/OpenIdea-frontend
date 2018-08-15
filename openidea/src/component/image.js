import React from 'react'
import { Image } from 'semantic-ui-react'

const imageStyle = {
<<<<<<< HEAD
<<<<<<< HEAD
  opacity: '0.5',
  filter: 'alpha(opacity=50)'

=======
=======
>>>>>>> parent of 8049407... add images to the landing page, add logo style, modify image style on landing page
  width: '1300px',
  height: '400px'
>>>>>>> parent of 8049407... add images to the landing page, add logo style, modify image style on landing page
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
<<<<<<< HEAD
<<<<<<< HEAD
      src='https://images.unsplash.com/photo-1533762385849-5aa14c83dbaf?ixlib=rb-0.3.5&ixid=eyJhcH'
=======
      src='http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/504146-VanGogh.jpg?itok=wuLlzirC&resize=1100x619'
>>>>>>> parent of 8049407... add images to the landing page, add logo style, modify image style on landing page
=======
      src='http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/504146-VanGogh.jpg?itok=wuLlzirC&resize=1100x619'
>>>>>>> parent of 8049407... add images to the landing page, add logo style, modify image style on landing page
      fluid
      style={imageStyle}
      />
</div>
)

export default ImageExampleFluid
