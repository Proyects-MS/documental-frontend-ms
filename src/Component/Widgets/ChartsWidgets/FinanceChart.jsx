import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Navigation } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import { columnChart } from '../../../Pages/Widgets/Charts/WidgetChartsData';
import { Finance } from '../../../Constant';

const FinanceChart = () => {
  return (
    <Fragment>
      <Col xl="5" lg="12" className="box-col-5">
        <Card>
          <CardHeader>
            <Row>
              <Col xs="9">
                <H5>{Finance}</H5>
              </Col>
              <Col xs="3" className="text-end"><Navigation className="text-muted" /></Col>
            </Row>
          </CardHeader>
          <CardBody>
            <div className="chart-container">
              <div id="columnchart">
                <ReactApexChart options={columnChart.options} series={columnChart.series} height="350" type="bar" />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default FinanceChart;