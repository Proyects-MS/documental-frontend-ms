import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import EcommerceContain from '../../../Component/DashBoard/Ecommerce/index';

const Ecommerce = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Dashboards" title="Ecommerce" />
      <EcommerceContain />
    </Fragment>
  );
};
export default Ecommerce;