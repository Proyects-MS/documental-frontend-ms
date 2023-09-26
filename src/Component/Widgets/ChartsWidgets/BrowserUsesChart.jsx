import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { browserUses } from '../../../Pages/Widgets/Charts/WidgetChartsData';
import { BrowserUsess } from '../../../Constant';
import CommenHeader from '../../Charts/Commen';

const BrowserUsesChart = () => {
  return (
    <Fragment>
      <Col sm="12" className="box-col-12">
        <div className="donut-chart-widget">
          <Card>
            <CommenHeader title={BrowserUsess} />
            <CardBody>
              <div id="chart-widget13">
                <ReactApexChart options={browserUses.options} series={browserUses.series} height="500" type="candlestick" />
              </div>
            </CardBody>
          </Card>
        </div>
      </Col>
    </Fragment>
  );
};
export default BrowserUsesChart;