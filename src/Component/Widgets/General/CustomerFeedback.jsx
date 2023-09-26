import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { H3, H4, H5, H6, LI, UL } from '../../../AbstractElements';
import { CustomerFeedbacks, Negative, Positive } from '../../../Constant';
import { MessageSvg } from '../SvgIcons';

const CustomerFeedback = () => {
    return (
        <Col xl='3 xl-50' md='6 box-col-6'>
            <Card>
                <CardBody className="widget-feedback">
                    <div className="feedback-top text-center">
                        <MessageSvg />
                        <H3>{CustomerFeedbacks}</H3>
                        <H6 attrH6={{ className: 'font-roboto f-w-400' }}>385749</H6>
                    </div>
                    <div id="feedback-chart"></div>
                    <UL attrUL={{ className: 'simple-list flex-row' }}>
                        <LI attrLI={{ className: 'font-roboto' }}>
                            <H4>{Positive}</H4>
                            <H5 attrH5={{ className: 'font-success' }}>90%</H5>
                        </LI>
                        <LI attrLI={{ className: 'font-roboto' }}>
                            <H4>{Negative}</H4>
                            <H5 attrH5={{ className: 'font-danger' }}>10%</H5>
                        </LI>
                    </UL>
                </CardBody>
            </Card>
        </Col>
    );
};
export default CustomerFeedback;