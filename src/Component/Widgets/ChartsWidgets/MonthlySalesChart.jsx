import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { monthlySale } from '../../../Pages/Widgets/Charts/WidgetChartsData';
import { MonthlySales } from '../../../Constant';
import CommenHeader from '../../Charts/Commen';

const MonthlySaleschart = () => {
  return (
    <Fragment>
      <Col xl="5" lg="12" className='xl-50'>
        <div className="small-chart-widget chart-widgets-small">
          <Card>
            <CommenHeader title={MonthlySales} />
            <CardBody>
              <div className="chart-container">
                <Row>
                  <Col xs="12">
                    <div id="chart-widget8">
                      <ReactApexChart options={monthlySale.options} series={monthlySale.series} height="300" type="radar" />
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
export default MonthlySaleschart;