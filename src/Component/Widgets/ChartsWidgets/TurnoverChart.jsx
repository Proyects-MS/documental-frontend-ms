import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { turnOver } from '../../../Pages/Widgets/Charts/WidgetChartsData';
import { Turnover } from '../../../Constant';
import CommenHeader from '../../Charts/Commen';

const TurnoverChart = () => {
  return (
    <Fragment>
      <Col xl="5" lg='12' className="xl-50">
        <div className="small-chart-widget chart-widgets-small">
          <Card>
            <CommenHeader title={Turnover} />
            <CardBody>
              <div className="chart-container">
                <Row>
                  <Col xs="12">
                    <div id="chart-widget7">
                      <ReactApexChart options={turnOver.options} series={turnOver.series} height="320" type="area" />
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
export default TurnoverChart;