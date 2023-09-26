import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, Col, Row } from 'reactstrap';
import { H4 } from '../../../AbstractElements';
import { radialChart } from '../../../Pages/Widgets/Charts/WidgetChartsData';
import { Month, Today, TotalEarning, Year } from '../../../Constant';
import CommenHeader from '../../Charts/Commen';

const TotalEarningChart = () => {
  return (
    <Fragment>
      <Col xl="5" md="12" className="box-col-5">
        <Card className="o-hidden">
          <CommenHeader title={TotalEarning} />
          <div className="bar-chart-widget">
            <div className="top-content bg-primary"></div>
            <div className="bottom-content card-body">
              <Row>
                <Col xs="12">
                  <div id="chart-widget5">
                    <ReactApexChart options={radialChart.options} series={radialChart.series} height="360" type="radialBar" />
                  </div>
                </Col>
              </Row>
              <Row className="text-center">
                <Col xs="4" className="b-r-light">
                  <div>
                    <span className=" font-primary">12%<i className="icon-angle-up f-12 ms-1"></i>
                    </span>
                    <span className="text-muted block-bottom">{Year}</span>
                    <H4 attrH4={{ className: 'num m-0' }}>
                      <span className="counter color-bottom">0
                      </span>
                      M
                    </H4>
                  </div>
                </Col>
                <Col xs="4" className="b-r-light">
                  <div><span className="font-primary">15%<i className="icon-angle-up f-12 ms-1"></i></span><span className="text-muted block-bottom">{Month}</span>
                    <H4 attrH4={{ className: 'num m-0' }}><span className="counter color-bottom">0</span>M</H4>
                  </div>
                </Col>
                <Col xs="4">
                  <div><span className=" font-primary">34%<i className="icon-angle-up f-12 ms-1"></i></span><span className="text-muted block-bottom">{Today}</span>
                    <H4 attrH4={{ className: 'num m-0' }}><span className="counter color-bottom">0</span>M</H4>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};
export default TotalEarningChart;