import React, { Fragment } from 'react';
import ChartistGraph from 'react-chartist';
import { Col, Card, CardBody } from 'reactstrap';
import { StackedBarChart } from '../../../Constant/index';
import CommenHeader from '../Commen';

const StackedBarChartClass = ({ chartData }) => {
  return (
    <Fragment>
      <Col xl="6" md="12" sm="12" className='box-col-12' >
        <Card>
          <CommenHeader title={StackedBarChart} />
          <CardBody>
            <ChartistGraph
              data={chartData.chart6Data}
              options={chartData.chart6Options}
              type={'Bar'}
              className="ct-10 flot-chart-container" />
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default StackedBarChartClass;