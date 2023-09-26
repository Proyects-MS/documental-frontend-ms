import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import Sidebar from '../JobCardView/Sidebar';
import JobApply from './Form';


const ApplyContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Sidebar />
          <JobApply />
        </Row>
      </Container>
    </Fragment>
  );
};

export default ApplyContain;