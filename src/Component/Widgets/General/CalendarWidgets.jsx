import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { H3, H5, P } from '../../../AbstractElements';
import { APRIL } from '../../../Constant';

const CalendarWidgets = () => {
  return (
    <Fragment>
      <Col sm="12" lg="6" xl="4" md="12" className="xl-50 box-col-6">
        <Card className="height-equal">
          <div className="calender-widget">
            <div className="cal-img"></div>
            <div className="cal-date">
              <H5>25<br />{APRIL}</H5>
            </div>
            <CardBody className="cal-desc text-center">
              <H3>I must explain to you how?</H3>
              <P>Denouncing pleasure and praising pain was born and I will give you a complete account of the system, 
                and expound the actual teachings of the great explorer of the truth,
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop Lorem Ipsum is simply.</P>
            </CardBody>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};
export default CalendarWidgets;