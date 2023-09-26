import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import MesonryGalleryContain from '../../Component/Gallery/MesonryGallery';

const MasonryGallery = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Gallery" title="Masonry Gallery" />
      <MesonryGalleryContain />
    </Fragment>
  );
};
export default MasonryGallery;