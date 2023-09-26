import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import OrderHistoryContain from '../../../Component/Ecommerce/OrderHistory';

const OrderHistory = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ecommerce" title="Order History" />
      <OrderHistoryContain />
    </Fragment>
  );
};
export default OrderHistory;