import { H5 } from '../../../AbstractElements';
import { radialChartLive } from '../../../Pages/Widgets/Charts/WidgetChartsData';
import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { TrendingUp } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { SkillStatus } from '../../../Constant';

const SkillStatusChart = () => {
  return (
    <Fragment>
      <Col xl="4" lg="12" className="box-col-6 xl-50">
        <Card>
          <CardHeader>
            <Row>
              <Col xs="9">
                <H5>{SkillStatus}</H5>
              </Col>
              <Col xs="3" className="text-end"><TrendingUp className="text-muted" /></Col>
            </Row>
          </CardHeader>
          <CardBody>
            <div className="chart-container">
              <div id="circlechart">
                <ReactApexChart options={radialChartLive.options} series={radialChartLive.series} height="370" type="radialBar" />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default SkillStatusChart;