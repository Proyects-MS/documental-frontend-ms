import React, { Fragment } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { ColumnChart } from '../../../Constant/index';
import { apexLineWithAnnotationCharts } from './apexData';
import CommenHeader from '../Commen';

const ApexLineChartClass = () => {
  return (
    <Fragment>
      <Col sm='12'>
        <Card>
          <CommenHeader title={ColumnChart} />
          <CardBody>
            <div id='annotationchart'>
              <Chart options={apexLineWithAnnotationCharts.options} series={apexLineWithAnnotationCharts.series} type="line" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default ApexLineChartClass;