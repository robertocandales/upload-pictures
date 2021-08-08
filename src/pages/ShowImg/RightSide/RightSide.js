import React from 'react';
import { Card } from 'antd';
const RightSide = ({
  opacity,
  rotate,
  scale,
  traslateX,
  traslateY,
  imageToShow,
  WraperStyles,
  NewImage,
}) => {
  return (
    <Card hoverable title='With modifications'>
      <WraperStyles>
        <NewImage
          opacity={opacity}
          rotate={`rotate(${rotate}deg)`}
          scale={`scale(${scale})`}
          translate={`translate(${traslateX}%, ${traslateY}%)`}
          src={imageToShow?.thumbUrl}
          alt=''
        />
        <div>Opacity: {opacity}</div>
        <div> Rotate: {rotate} ° </div>
        <div> Scale: {scale}</div>
        <div>Traslate axis X : {traslateX}</div>
        <div>Traslate axis Y : {traslateY}</div>
      </WraperStyles>
    </Card>
  );
};

export default RightSide;
