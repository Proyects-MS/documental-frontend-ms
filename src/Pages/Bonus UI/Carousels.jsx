import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import CarouselsContain from '../../Component/Bonus UI/Carousel';

const Carousel = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Carousel" />
      <CarouselsContain />
    </Fragment>
  );
};

export default Carousel;