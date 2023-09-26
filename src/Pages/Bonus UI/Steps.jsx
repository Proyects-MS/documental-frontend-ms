import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import StepsContain from '../../Component/Bonus UI/Steps';

const Steps = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Step" />
      <StepsContain />
    </Fragment>
  );
};

export default Steps;