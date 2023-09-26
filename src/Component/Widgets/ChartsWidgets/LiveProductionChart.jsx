import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { product } from '../../../Pages/Widgets/Charts/WidgetChartsData';
import { LiveProducts } from '../../../Constant';
import CommenHeader from '../../Charts/Commen';

const LiveProductionChart = () => {
  return (
    <Fragment>
      <Col xl='7' lg='12' className="xl-50">
        <div className="small-chart-widget chart-widgets-small">
          <Card>
            <CommenHeader title={LiveProducts} />
            <CardBody>
              <div className="chart-container">
                <Row>
                  <Col xs="12">
                    <div id="chart-widget6">
                      <ReactApexChart options={product.options} series={product.series} height="320" type="line" />
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
export default LiveProductionChart;