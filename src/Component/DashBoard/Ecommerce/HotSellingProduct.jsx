import React, { Fragment } from 'react';
import { MoreHorizontal } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Media, Table } from 'reactstrap';
import { H5, Image, LI, P, UL } from '../../../AbstractElements';
import { HotsellingData } from '../../../Data/DashEcommerce';

const HotSellingProduct = () => {
    return (
        <Fragment>
            <Col xl='4' md='6' className='dash-lgorder-1 dash-xl-33 dash-lg-50 box-col-6'>
                <Card className="hot-selling">
                    <CardHeader className="card-no-border">
                        <div className="header-top">
                            <H5 attrH5={{ className: 'm-0' }}>Hot Selling Products</H5>
                            <div className="icon-box onhover-dropdown"><MoreHorizontal />
                                <div className="icon-box-show onhover-show-div">
                                    <UL>
                                        <LI> <a href='#javascript'>Today</a></LI>
                                        <LI> <a href='#javascript'>Yesterday</a></LI>
                                        <LI> <a href='#javascript'>Tommorow</a></LI>
                                    </UL>
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="pt-0">
                        <div className="table-responsive">
                            <Table borderless>
                                <tbody>
                                    {
                                        HotsellingData.map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>
                                                        <Media>
                                                            <Image attrImage={{ className: 'img-fluid me-3 b-r-5', src: `${item.img}`, alt: '' }} />
                                                            <Media body>
                                                                <a href="#javascript">
                                                                    <H5>{item.title}</H5>
                                                                </a>
                                                                <P>{item.sales}</P>
                                                            </Media>
                                                        </Media>
                                                    </td>
                                                    <td><span className="badge badge-light-theme-light font-theme-light">{item.prize}</span></td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default HotSellingProduct;