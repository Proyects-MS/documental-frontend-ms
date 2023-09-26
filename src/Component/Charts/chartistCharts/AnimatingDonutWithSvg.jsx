import React, { Fragment } from 'react';
import ChartistGraph from 'react-chartist';
import { Col, Card, CardBody } from 'reactstrap';
import { AnimatingDonutWithSvg } from '../../../Constant/index';
import CommenHeader from '../Commen';

const AnimatedDotedClass = ({ chartData }) => {
  return (
    <Fragment>
      <Col xl="6" md="12" sm="12" className='box-col-12' >
        <Card>
          <CommenHeader title={AnimatingDonutWithSvg} />
          <CardBody>
            <ChartistGraph
              data={chartData.chart2Data}
              options={chartData.chart2Option}
              type={'Pie'}
              className="ct-8 flot-chart-container" />
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default AnimatedDotedClass;