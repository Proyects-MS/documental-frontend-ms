import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import { H3, H5, Image } from '../../../../AbstractElements';
import shoes from '../../../../assets/images/dashboard-2/image.png';
import CountdownData from './CountdownData';

const Item1 = () => {
    return (
        <Fragment>
            <div className="item">
                <Row className="discount-block">
                    <Col xl='7' lg='12' className="dash-xl-100 box-col-12">
                        <div className="discount-detail">
                            <div>
                                <H5> Special Discount <span className="font-primary f-w-500">70%OFF</span></H5>
                                <H3 attrH3={{ className: 'm-auto' }}>Deal of the Day from <span className="font-primary">$75</span></H3>
                                <CountdownData />
                            </div>
                        </div>
                    </Col>
                    <Col xl='5' lg='12' className="dash-xl-100 box-col-12">
                        <div className="img-wrraper">
                            <Image attrImage={{ className: 'img-fluid', src: `${shoes}`, alt: '' }} />
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
export default Item1;