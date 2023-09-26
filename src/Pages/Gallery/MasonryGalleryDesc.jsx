import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import MesonryDescContain from '../../Component/Gallery/MesonryDesc';

const MasonryGalleryDesc = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Gallery" title="Masonry Gallery Desc" />
      <MesonryDescContain />
    </Fragment>
  );
};
export default MasonryGalleryDesc;