import React, { Fragment } from 'react';
import ChartistGraph from 'react-chartist';
import { CardBody, Col } from 'reactstrap';
import { H6 } from '../../../AbstractElements';
import { SmallChart1Data, SmallChart1Option } from '../../../Pages/DashBoard/Ecommerce/Ecom_ChartData/SmallCharts';
import SmallSales1 from './SmallSales1';
import SmallSales2 from './SmallSales2';

const SmallSales = () => {
  return (
    <Fragment>
      <Col xs='4' className="p-0">
        <div className="sales-small-chart">
          <CardBody className="p-0 m-auto">
            <ChartistGraph
              className="sales-small sales-small-1"
              data={SmallChart1Data}
              options={SmallChart1Option}
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
            <H6>300</H6><span>Watch Sale</span>
          </CardBody>
        </div>
      </Col>
      <SmallSales1 />
      <SmallSales2 />
    </Fragment>
  );
};
export default SmallSales;