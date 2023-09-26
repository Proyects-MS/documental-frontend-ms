import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import ComposeMessage from './ComposeMessage';
import MailSidebar from '../Mail Inbox/MailSidebar';

const ComposeContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="email-wrap">
          <Row>
            <Col xl="3" md="6" className="xl-30 box-col-3">
              <MailSidebar />
            </Col>
            <Col xl="9" md="12" className="xl-70 box-col-9">
              <ComposeMessage />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default ComposeContain;