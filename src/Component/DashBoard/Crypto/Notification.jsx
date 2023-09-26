import React, { Fragment } from 'react';
import { MoreHorizontal } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Media, Table } from 'reactstrap';
import { H5, Image, LI, P, UL } from '../../../AbstractElements';
import Notification2Crypto from './Notification2';
import Notification3Crypto from './Notification3';
import TeacherImage from '../../../assets/images/avtar/teacher.png';
import { CliffordHale, Earlist, Latest, Notification } from '../../../Constant';

const NotificationCrypto = () => {
    return (
        <Fragment>
            <Col xl='4' md='6' className="dash-31 dash-xl-50 box-col-6">
                <Card className="cripto-notification">
                    <CardHeader className="card-no-border">
                        <Media className="media-dashboard">
                            <Media body>
                                <H5 attrH5={{ className: 'mb-0' }}>{Notification}</H5>
                            </Media>
                            <div className="icon-box onhover-dropdown"><MoreHorizontal />
                                <div className="icon-box-show onhover-show-div">
                                    <UL>
                                        <LI><a href='#javascript'>{Latest} </a></LI>
                                        <LI><a href='#javascript'> {Earlist}</a></LI>
                                    </UL>
                                </div>
                            </div>
                        </Media>
                    </CardHeader>
                    <CardBody className="pt-0">
                        <div className="table-responsive">
                            <Table borderless>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Media >
                                                <div className="square-box"><Image attrImage={{ src: `${TeacherImage}`, alt: '' }} /></div>
                                                <Media body>
                                                    <H5>{CliffordHale}<span className="font-theme-light f-w-400 f-12 ms-3">Sent you a message</span></H5>
                                                    <P attrPara={{ className: 'mb-0' }}>Hallo bro anak ? wes Kulish urung?...</P>
                                                </Media>
                                            </Media>
                                        </td>
                                        <td><span className="badge badge-light-theme-light font-theme-light">2 hours ago</span></td>
                                    </tr>
                                    <Notification2Crypto />
                                    <Notification3Crypto />
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default NotificationCrypto;