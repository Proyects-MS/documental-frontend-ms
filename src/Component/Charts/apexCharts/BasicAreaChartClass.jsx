import React, { Fragment } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { BasicAreaChart } from '../../../Constant/index';
import { apexAreaChart } from './apexData';
import CommenHeader from '../Commen';

const BasicAreaChartClass = () => {
  return (
    <Fragment>
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <CommenHeader title={BasicAreaChart} />
          <CardBody>
            <div id='basic-apex'>
              <Chart options={apexAreaChart.options} series={apexAreaChart.series} type="area" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default BasicAreaChartClass;