import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Chart } from 'react-google-charts';
import { H5 } from '../../../AbstractElements';

const PieChartClass = ({ data, title, colClass, digit, is3D, pieHole, pieStartAngle, pieSliceText }) => {

  return (
    <Fragment>
      <Col className={colClass ? 'col-sm-12' : 'col-sm-12 col-xl-6 col-12'}>
        <Card>
          <CardHeader className='pb-0'>
            <H5>{title} {digit &&
              <span className="digits">{digit}</span>}
            </H5>
          </CardHeader>
          <CardBody className="chart-block">
            <div className="chart-overflow" id="pie-chart1">
              <Chart
                width={data?.width}
                height={data?.height}
                chartType={data?.chartType}
                loader={<div>{'Loading Chart'}</div>}
                data={data?.data}// eslint-disable-next-line
                options={data?.options && is3D ? { is3D: is3D } : '' &&
                  pieHole ? { pieHole: pieHole } : '' &&
                    pieStartAngle ? { pieStartAngle: pieStartAngle } : '' &&
                      pieSliceText ? { pieSliceText: pieSliceText } : ''
                }
                rootProps={data?.rootProps}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default PieChartClass;