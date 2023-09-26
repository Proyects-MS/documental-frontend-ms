import React, { Fragment } from 'react';
import ChartistGraph from 'react-chartist';
import { Col, Card, CardBody } from 'reactstrap';
import { SimpleLineChart } from '../../../Constant/index';
import CommenHeader from '../Commen';

const SimpleLineChartClass = ({ chartData }) => {
  return (
    <Fragment>
      <Col xl="6" md="12" sm="12" className='box-col-12' >
        <Card>
          <CommenHeader title={SimpleLineChart} />
          <CardBody>
            <ChartistGraph
              data={chartData.chart10Data}
              options={chartData.chart10Options}
              type={'Line'}
              className="ct-1 flot-chart-container" />
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default SimpleLineChartClass;