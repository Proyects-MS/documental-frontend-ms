import React, { Fragment } from 'react';
import { Card, CardHeader, Col, Row } from 'reactstrap';
import LeftBar from '../LeftBar';
import RightBar from '../RightBar';
import { H5 } from '../../../AbstractElements';
import AddFriends from './AddFriends';
import Hobby from './Hobby';
import Educations from './Education';
import ActivityLogg from './ActivityLog';

const AboutTimeLine = () => {
  return (
    <Fragment>
      <Row>
        <Col xl="3 xl-40 box-col-4" lg="12" md="5">
          <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc4">
            <Row>
              <LeftBar />
            </Row>
          </div>
        </Col>
        <Col xl="6 xl-60 box-col-8" lg="12" md="7">
          <Row>
            <Col sm="12">
              <Card>
                <CardHeader>
                  <H5>{'Pepole You May Know'}</H5>
                </CardHeader>
                <AddFriends />
              </Card>
            </Col>
            <Hobby />
            <Educations />
            <Col sm="12">
              <Card>
                <CardHeader>
                  <H5>{'Viewed Your Profile'}</H5>
                </CardHeader>
                <AddFriends />
              </Card>
            </Col>
            <ActivityLogg />
          </Row>
        </Col>
        <Col xl="3 xl-100 box-col-12">
          <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc1">
            <Row>
              <RightBar />
            </Row>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
export default AboutTimeLine;