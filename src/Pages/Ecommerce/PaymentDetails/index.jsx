import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import PaymentDetailContain from '../../../Component/Ecommerce/PaymentDetails';

const PaymentDetails = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ecommerce" title=" Payment Details" />
      <PaymentDetailContain />
    </Fragment>
  );
};
export default PaymentDetails;