import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { uses } from '../../../Pages/Widgets/Charts/WidgetChartsData';
import { Uses } from '../../../Constant';
import CommenHeader from '../../Charts/Commen';

const UsesChart = () => {
  return (
    <Fragment>
      <Col xl="7" lg="12" className='xl-50'>
        <div className="small-chart-widget chart-widgets-small">
          <Card>
            <CommenHeader title={Uses} />
            <CardBody>
              <div className="chart-container">
                <Row>
                  <Col xs="12">
                    <div id="chart-widget9">
                      <ReactApexChart options={uses.options} series={uses.series} height="320" type="bubble" />
                    </div>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </div>
      </Col>
    </Fragment>
  );
};
export default UsesChart;