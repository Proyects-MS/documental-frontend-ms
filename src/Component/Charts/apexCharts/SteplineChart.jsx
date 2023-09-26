import React, { Fragment } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { SteplineChart } from '../../../Constant/index';
import CommenHeader from '../Commen';
import { apexSteplineChart } from './apexData';

const SteplineChartClass = () => {
  return (
    <Fragment>
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <CommenHeader title={SteplineChart} />
          <CardBody>
            <div id='stepline'>
              <Chart options={apexSteplineChart.options} series={apexSteplineChart.series} type="line" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default SteplineChartClass;