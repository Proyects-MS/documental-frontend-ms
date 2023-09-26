import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import ImagecropperContain from '../../Component/Bonus UI/ImageCropper';

const ImageCroppers = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Image Cropper" />
      <ImagecropperContain />
    </Fragment>
  );
};

export default ImageCroppers;