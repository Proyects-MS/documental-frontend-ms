import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import BreadcrumbClassContain from '../../Component/Bonus UI/Breadcrumb';

const BreadcrumbsClass = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Breadcrumbs" />
      <BreadcrumbClassContain />
    </Fragment>
  );
};

export default BreadcrumbsClass;