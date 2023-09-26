import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import UploadImageContain from '../../Component/Bonus UI/ImageUpload';

const ImageUpload = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Image Upload" />
      <UploadImageContain />
    </Fragment>
  );
};

export default ImageUpload;