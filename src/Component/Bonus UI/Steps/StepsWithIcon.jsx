import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H5 } from '../../../AbstractElements';


const StepsWithIcon = () => {
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader className="pb-0">
                        <H5>{'Steps with icon'}</H5>
                    </CardHeader>
                    <CardBody>
                        <Row className="u-steps">
                            <Col md="4" className="u-step"><span className="u-step-icon icon-shopping-cart-full" aria-hidden="true"></span>
                                <div className="u-step-desc"><span className="u-step-title">Shopping</span></div>
                            </Col>
                            <Col md="4" className="u-step current"><span className="u-step-icon icon-notepad" aria-hidden="true"></span>
                                <div className="u-step-desc"><span className="u-step-title">Billing</span></div>
                            </Col>
                            <Col md="4" className="u-step"><span className="u-step-icon icon-time" aria-hidden="true"></span>
                                <div className="u-step-desc"><span className="u-step-title">Getting</span></div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default StepsWithIcon;