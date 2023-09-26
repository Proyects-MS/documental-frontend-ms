import { H4, H6 } from '../../../AbstractElements';
import { lineChart1 } from '../../../Pages/Widgets/Charts/WidgetChartsData';
import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, Col, Row } from 'reactstrap';
import { SALE } from '../../../Constant';

const SaleChart = () => {
  return (
    <Fragment>
      <Col xl="4" md="6" className='box-col-4'>
        <Card className="o-hidden">
          <div className="chart-widget-top">
            <div className="card-body">
              <Row>
                <Col xs="5">
                  <H6 attrH6={{ className: 'f-w-600 font-primary' }}>{SALE}</H6><span className="num"><span className="counter">90</span>%<i className="icon-angle-up f-12 ms-1"></i></span>
                </Col>
                <Col xs="7" className="text-end">
                  <H4 attrH4={{ className: 'num total-value' }}>$<span className="counter">3654</span>.00</H4>
                </Col>
              </Row>
            </div>
            <div>
              <div id="chart-widget1">
                <ReactApexChart options={lineChart1.options} series={lineChart1.series} height="170" type="area" />
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};
export default SaleChart;