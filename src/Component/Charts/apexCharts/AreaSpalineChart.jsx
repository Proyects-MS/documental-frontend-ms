import React, { Fragment } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { AreaSpalineChart } from '../../../Constant/index';
import { areaSpaline } from './apexData';
import CommenHeader from '../Commen';

const AreaSpalineChartClass = () => {
  return (
    <Fragment>
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <CommenHeader title={AreaSpalineChart} />
          <CardBody>
            <div id='basic-apex'>
              <Chart options={areaSpaline.options} series={areaSpaline.series} height="350" type="area" />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default AreaSpalineChartClass;