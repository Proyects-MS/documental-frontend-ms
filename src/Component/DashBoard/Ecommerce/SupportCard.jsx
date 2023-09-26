import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { H5, Image, P } from '../../../AbstractElements';
import SupportImg from '../../../assets/images/dashboard-2/support-img.png';

const SupportCard = () => {
    return (
        <Fragment>
            <Col xl='4' md='6' className='dash-xl-50 dash-29 box-col-6'>
                <Card className="bg-primary get-support">
                    <CardBody>
                        <div className="support-sec-img">
                            <Image attrImage={{ className: 'img-fluid', src: `${SupportImg}`, alt: '' }} />
                        </div>
                        <div className="support-detail">
                            <H5>Get support 24 hours</H5>
                            <P>Check Our new service & feature about sales!</P>
                            <a className="btn btn-outline-white_color" href="#javascript">
                                Interested?
                            </a>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default SupportCard;