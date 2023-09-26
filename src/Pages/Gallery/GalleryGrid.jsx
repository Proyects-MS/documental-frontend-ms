import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import ImageGalleryContain from '../../Component/Gallery/ImageGallery';

const GalleryGrid = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Gallery" title=" Gallery Grid" />
      <ImageGalleryContain />
    </Fragment>
  );
};
export default GalleryGrid;