import React, { Fragment } from 'react';
import ApexChart from 'react-apexcharts';
import { MoreHorizontal } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H5, UL, LI } from '../../../AbstractElements';
import { TotalTrasactionsChart } from '../../../Pages/DashBoard/ChartsData/TotalEvents';
import TotalReports from './TotalReports';

const TotalTrasactions = () => {
  return (
    <Fragment>
      <Col xl='6' lg='12' className='dash-xl-100 box-col-12'>
        <Card className="total-transactions">
          <Row className="row m-0">
            <Col sm='6' md='6' className=" p-0">
              <div className="card-header card-no-border">
                <H5>Total Transactions</H5>
              </div>
              <CardBody className="pt-0">
                <div>
                  <ApexChart id="transaction-chart" options={TotalTrasactionsChart.options} series={TotalTrasactionsChart.series} type='bar' height="155" />
                </div>
              </CardBody>
            </Col>
            <Col sm='6' md='6' className="p-0 report-sec">
              <CardHeader className="card-no-border">
                <div className="header-top">
                  <H5 attrH5={{ className: 'm-0' }}>Report</H5>
                  <div className="icon-box onhover-dropdown"><MoreHorizontal />
                    <div className="icon-box-show onhover-show-div">
                      <UL>
                        <LI><a href='#javascript'>Today</a></LI>
                        <LI><a href='#javascript'> Yesterday</a></LI>
                        <LI><a href='#javascript'> Tommorow</a></LI>
                      </UL>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <TotalReports />
            </Col>
          </Row>
        </Card>
      </Col>
    </Fragment>
  );
};
export default TotalTrasactions;