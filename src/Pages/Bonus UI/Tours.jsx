import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import ToursContain from '../../Component/Bonus UI/Tour';

const Tours = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Tour" />
      <ToursContain />
    </Fragment>
  );
};

export default Tours;