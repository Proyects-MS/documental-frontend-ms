import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { MoreHorizontal } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Media, Row } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import { SaleChart } from '../../../Pages/DashBoard/Ecommerce/Ecom_ChartData/SmallCharts';
import SmallSales from './SmallSales';

const SalesCard = () => {
  return (
    <Fragment>
      <Col xl='3' md='6' className='dash-xl-33 dash-lg-50 box-col-6'>
        <Card className="sales-state">
          <Row className="m-0">
            <Col xs='12' className="p-0">
              <Card className="bg-primary">
                <CardHeader className="card-no-border bg-primary">
                  <Media className="media-dashboard">
                    <Media body>
                      <H5 attrH5={{ className: 'mb-0 text-light' }}>Sales Stats</H5>
                    </Media>
                    <div className="icon-box"><MoreHorizontal /></div>
                  </Media>
                </CardHeader>
                <CardBody className="p-0">
                  <ReactApexChart options={SaleChart.options} series={SaleChart.series} height="142"
                    type='line' id="sales-state-chart" />
                </CardBody>
              </Card>
            </Col>
            <SmallSales />
          </Row>
        </Card>
      </Col>
    </Fragment>
  );
};
export default SalesCard;