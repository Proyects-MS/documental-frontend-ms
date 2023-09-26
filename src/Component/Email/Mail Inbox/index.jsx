import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MailContain from './MailContain';
import MailSidebar from './MailSidebar';

const MailInboxContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="email-wrap">
          <Row>
            <Col xl="3" md="6" className="xl-30 box-col-3">
              <MailSidebar />
            </Col>
            <Col xl="9" md="12" className="xl-70 box-col-9">
              <MailContain />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default MailInboxContain;