import React, { Fragment } from 'react';
import Timeline1 from './timeline1';
import VerticalTimelineComp from './verticalTimelineComp';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Examples } from '../../../Constant';
import { H5 } from '../../../AbstractElements';

const TimelineContain = () => {
    return (
        <Fragment>
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="pb-0">
                                <H5>{Examples} {'1'}</H5>
                            </CardHeader>
                            <CardBody>
                                <Timeline1 />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="pb-0">
                                <H5>{Examples} {'2'}</H5>
                            </CardHeader>
                            <CardBody>
                                <VerticalTimelineComp />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default TimelineContain;