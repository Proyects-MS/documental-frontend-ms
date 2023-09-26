import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { BubbleChart } from '../../../Constant/index';
import Chart from 'react-apexcharts';
import { apex3DbubbleCharts } from './apexData';
import CommenHeader from '../Commen';

const BubbleChartClass = () => {
  return (
    <Fragment>
      <Col sm='12' xl='6' className='box-col-12'>
        <Card>
          <CommenHeader title={BubbleChart} />
          <CardBody>
            <div id='chart-bubble'>
              <Chart options={apex3DbubbleCharts.options} series={apex3DbubbleCharts.series} type="bubble" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default BubbleChartClass;