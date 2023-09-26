import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { MoreHorizontal } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Media } from 'reactstrap';
import { H5, H6, LI, UL } from '../../../AbstractElements';
import { RevenueByCategoryChart } from '../../../Pages/DashBoard/Ecommerce/Ecom_ChartData/SmallCharts';

const RevenueByCategory = () => {
    return (
        <Fragment>
            <Col xl='3' md='6' className='dash-xl-50 dash-32 box-col-6'>
                <Card className="revenue-category">
                    <CardHeader className="card-no-border">
                        <Media>
                            <Media body>
                                <H5 attrH5={{ className: 'mb-0' }}>Revenue by Category</H5>
                            </Media>
                            <div className="icon-box onhover-dropdown"><MoreHorizontal />
                                <div className="icon-box-show onhover-show-div">
                                    <UL>
                                        <LI> <a href='#javascript'> Done</a></LI>
                                        <LI> <a href='#javascript'> Pending</a></LI>
                                    </UL>
                                </div>
                            </div>
                        </Media>
                    </CardHeader>
                    <CardBody>
                        <div className="donut-inner">
                            <H5>16,349</H5>
                            <H6>2,174 in pending</H6>
                        </div>
                        <ReactApexChart
                            id="revenue-chart"
                            type='donut'
                            height={'320'}
                            options={RevenueByCategoryChart.options}
                            series={RevenueByCategoryChart.series}
                        />
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default RevenueByCategory;