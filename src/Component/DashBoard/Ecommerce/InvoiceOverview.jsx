import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { MoreHorizontal } from 'react-feather';
import { H5, LI, UL } from '../../../AbstractElements';
import { ApexInvoiceChart } from '../../../Pages/DashBoard/Ecommerce/Ecom_ChartData/InvoiceOverviewChart';

const InvoiceOverview = () => {
  return (
    <Fragment>
      <Col xl="5" md="6" className="dash-xl-33 dash-lg-50 box-col-6">
        <Card className='pb-0 invoice-overviwe'>
          <CardHeader className="card-no-border">
            <div className="header-top">
              <H5 className="m-0">Invoice Overview</H5>
              <div className="icon-box onhover-dropdown"><MoreHorizontal />
                <div className="icon-box-show onhover-show-div">
                  <UL>
                    <LI> <a href='#javascript'>Today</a></LI>
                    <LI> <a href='#javascript'> Yesterday</a></LI>
                    <LI> <a href='#javascript'>Tommorow</a></LI>
                  </UL>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody className="pt-0">
            <ReactApexChart
              id="invoice-overviwe-chart"
              options={ApexInvoiceChart.options}
              series={ApexInvoiceChart.series}
              type="bar"
              height='263'
            />
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default InvoiceOverview;