import { H5 } from '../../../AbstractElements';
import { ApexLineChartOption, ApexLineChartSeries } from '../../../Pages/Widgets/Charts/WidgetChartsData';
import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ShoppingBag } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { OrderStatus } from '../../../Constant';

const OrderStatus2 = () => {
  return (
    <Fragment>
      <Col xl="7" lg="12" className="box-col-7">
        <Card>
          <CardHeader>
            <Row>
              <Col xs="9">
                <H5>{OrderStatus}</H5>
              </Col>
              <Col xs="3" className="text-end"><ShoppingBag className="text-muted" /></Col>
            </Row>
          </CardHeader>
          <CardBody>
            <div className="chart-container">
              <div id="linechart">
                <ReactApexChart options={ApexLineChartOption.options} height='350' series={ApexLineChartSeries.series} type="line"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default OrderStatus2;