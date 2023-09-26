import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import { RadialBarChart } from '../../../Constant/index';
import { apexRadialBarChart } from './apexData';
import CommenHeader from '../Commen';

const RadialBarChartClass = () => {
  return (
    <Fragment>
      <Col sm='12' xl="6" className='box-col-6'>
        <Card>
          <CommenHeader title={RadialBarChart} />
          <CardBody>
            <div id='circlechart'>
              <Chart options={apexRadialBarChart.options} series={apexRadialBarChart.series} type="radialBar" height={320} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default RadialBarChartClass;