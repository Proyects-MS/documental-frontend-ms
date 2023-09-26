import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H5 } from '../../../AbstractElements';

const DefaultSteps = () => {
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader className="pb-0">
                        <H5>{'Default Pearls Steps'}</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <div className="u-pearl done col-4"><span className="u-pearl-number">1</span><span className="u-pearl-title">Account Info</span></div>
                            <div className="u-pearl current col-4"><span className="u-pearl-number">2</span><span className="u-pearl-title">Billing Info</span></div>
                            <div className="u-pearl col-4"><span className="u-pearl-number">3</span><span className="u-pearl-title">Confirmation</span></div>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default DefaultSteps;