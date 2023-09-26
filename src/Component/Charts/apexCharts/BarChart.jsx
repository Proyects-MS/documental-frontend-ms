import React, { Fragment } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { BarChart } from '../../../Constant/index';
import CommenHeader from '../Commen';
import { apexBarChart } from './apexData';

const BarChartClass = () => {
  return (
    <Fragment>
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <CommenHeader title={BarChart} />
          <CardBody>
            <div id='basic-bar'>
              <Chart options={apexBarChart.options} series={apexBarChart.series} type="bar" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default BarChartClass;