import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { MoreHorizontal } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Media } from 'reactstrap';
import { H5, H6, LI, UL } from '../../../AbstractElements';
import { TotalSalesCharts } from '../../../Pages/DashBoard/Ecommerce/Ecom_ChartData/SmallCharts';

const TotalSales = () => {
    return (
        <Fragment>
            <Col xl='4' md='6' className="dash-xl-50 dash-31 box-col-6">
                <Card className="total-sale">
                    <CardHeader className="card-no-border">
                        <Media>
                            <Media body>
                                <H5 attrH5={{ className: 'mb-0' }}>Total sale</H5>
                            </Media>
                            <div className="icon-box onhover-dropdown"><MoreHorizontal />
                                <div className="icon-box-show onhover-show-div">
                                    <UL>
                                        <LI><a href='#javascript'>Done</a></LI>
                                        <LI> <a href='#javascript'>Pending</a></LI>
                                        <LI> <a href='#javascript'>Rejected</a></LI>
                                        <LI> <a href='#javascript'>In Progress</a></LI>
                                    </UL>
                                </div>
                            </div>
                        </Media>
                        <div className="animat-block">
                            <UL>
                                <LI></LI>
                                <LI></LI>
                                <LI></LI>
                                <LI></LI>
                                <LI></LI>
                                <LI></LI>
                            </UL>
                        </div>
                    </CardHeader>
                    <CardBody className="pt-0">
                        <div className="sale-main">
                            <div className="sale-left">
                                <H6 attrH6={{ className: 'font-danger' }}>
                                    <i className="icon-arrow-down"></i>
                                    <span>0.45%</span>
                                </H6>
                                <H5 attrH5={{ className: 'font-primary' }}>680.96</H5>
                            </div>
                            <div className="sale-right">
                                <ReactApexChart
                                    id="total-sales-chart"
                                    height='95'
                                    type='line'
                                    options={TotalSalesCharts.options}
                                    series={TotalSalesCharts.series}
                                />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default TotalSales;