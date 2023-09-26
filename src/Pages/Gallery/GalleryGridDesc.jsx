import React, { Fragment } from 'react';
import ImageWithDescContain from '../../Component/Gallery/ImageWithDesc';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';

const GalleryGridDesc = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Gallery" title=" Gallery Grid Desc" />
      <ImageWithDescContain />
    </Fragment>
  );
};
export default GalleryGridDesc;