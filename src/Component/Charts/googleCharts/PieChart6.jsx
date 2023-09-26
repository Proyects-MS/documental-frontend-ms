import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { RotatingPieChart } from '../../../Constant/index';
import { Chart } from 'react-google-charts';
import { H5 } from '../../../AbstractElements';
import { PieChart6Data, PieChart6option } from './ChartData';

const PieChart5Class = ({ data }) => {

  return (
    <Fragment>
      <Col sm="12" >
        <Card>
          <CardHeader className='pb-0'>
            <H5>{RotatingPieChart}
              <span className="digits">{'2'}</span>
            </H5>
          </CardHeader>
          <CardBody className="chart-block">
            <div className="chart-overflow" id="pie-chart1">
              <Chart
                width={data?.width}
                height={data?.height}
                chartType={data?.chartType}
                loader={<div>{'Loading Chart'}</div>}
                data={PieChart6Data}
                options={PieChart6option}
                rootProps={data?.rootProps}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default PieChart5Class;