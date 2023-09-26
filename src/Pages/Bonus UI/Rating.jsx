import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import RatingClassContain from '../../Component/Bonus UI/Rating';

const RatingClass = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Rating Class" />
      <RatingClassContain />
    </Fragment>
  );
};

export default RatingClass;