import React, { Fragment } from 'react';
import ChartistGraph from 'react-chartist';
import { Col, Card, CardBody } from 'reactstrap';
import { LineChartWithArea } from '../../../Constant/index';
import CommenHeader from '../Commen';

const LineChartWithAreaClass = ({ chartData }) => {
  return (
    <Fragment>
      <Col xl="6" md="12" sm="12" className='box-col-12' >
        <Card>
          <CommenHeader title={LineChartWithArea} />
          <CardBody>
            <ChartistGraph
              data={chartData.chart4Data}
              options={chartData.chart4Options}
              type={'Line'}
              className="ct-4 flot-chart-container" />
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default LineChartWithAreaClass;