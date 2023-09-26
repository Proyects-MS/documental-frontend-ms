import React, { Fragment } from 'react';
import ChartistGraph from 'react-chartist';
import { CardBody, Col } from 'reactstrap';
import { H6 } from '../../../AbstractElements';
import { SmallChart2Data, SmallChart2Option } from '../../../Pages/DashBoard/Ecommerce/Ecom_ChartData/SmallCharts';

const SmallSales1 = () => {
  return (
    <Fragment>
      <Col xs='4' className="p-0">
        <div className="sales-small-chart">
          <CardBody className="p-0 m-auto">
            <ChartistGraph
              className="sales-small sales-small-2"
              options={SmallChart2Option}
              data={SmallChart2Data}
              type={'Bar'}
              listener={{
                'draw': function (data) {
                  if (data.type === 'bar') {
                    data.element.attr({
                      style: 'stroke-width: 3px ; stroke-linecap: round',
                    });
                  }
                }
              }}
            />
            <H6>1120</H6><span>Phone Sale</span>
          </CardBody>
        </div>
      </Col>
    </Fragment>
  );
};
export default SmallSales1;