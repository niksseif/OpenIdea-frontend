// eslint-disable-next-line
import React from 'react';
import { Image } from 'semantic-ui-react';
import landingpageImage from '../landingPage2.png';
import ProgressiveImage from 'react-progressive-image';

const imageStyle = {
  width: '100%',
  opacity: '0.96',
  filter: 'alpha(opacity=50)',

};
const top = {
  position: 'absolute',
  top: '150px',
  left: '90px',
  fontWeight: 'bold',
  color: 'white',
  fontSize: '60px',
};

const ImageExampleFluid = () => (
  <div className="container">

    <ProgressiveImage
      delay={400}
      placeholder="tiny-image.jpg"
      src={landingpageImage}
      fluid
      style={imageStyle}
    >
      {(src, loading) => (
        <Image style={{ opacity: loading ? 0.5 : 1, width: '100%' }} src={landingpageImage} alt="Open idea" />
      )}
    </ProgressiveImage>
      <h1
        style={top}
      >
        Open Idea
      </h1>
  </div>
);

export default ImageExampleFluid;
