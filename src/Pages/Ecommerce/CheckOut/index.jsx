import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import CheckOutContain from '../../../Component/Ecommerce/CheckOut';

const CheckOut = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ecommerce" title="CheckOut" />
      <CheckOutContain />
    </Fragment>
  );
};
export default CheckOut;