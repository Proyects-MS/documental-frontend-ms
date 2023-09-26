import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import ImageHoverContain from '../../Component/Gallery/ImageHover';

const HoverEffects = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Gallery" title="Hover Effect" />
      <ImageHoverContain />
    </Fragment>
  );
};
export default HoverEffects;