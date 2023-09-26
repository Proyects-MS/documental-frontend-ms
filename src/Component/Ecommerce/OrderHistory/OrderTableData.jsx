import React, { Fragment } from 'react';
import DataTable from 'react-data-table-component';
import { CardBody } from 'reactstrap';
import { OrderHistoryColumns, OrderHistoryData } from '../../../Data/Ecommerce/OrderHistoryList';

const OrderTableData = () => {
  return (
    <Fragment>
      <CardBody>
        <div className="order-history table-responsive">
          <DataTable
            pagination
            paginationServer
            data={OrderHistoryData}
            columns={OrderHistoryColumns}
          />
        </div>
      </CardBody>
    </Fragment>
  );
};
export default OrderTableData;
