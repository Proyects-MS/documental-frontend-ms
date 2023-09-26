import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import InvoiceContain from '../../../Component/Ecommerce/Invoice';

const Invoice = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ecommerce" title="Invoice" />
      <InvoiceContain />
    </Fragment>
  );
};
export default Invoice;