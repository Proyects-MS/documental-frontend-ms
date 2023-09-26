import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import Sidebar from '../JobCardView/Sidebar';
import MainCard from './MainCard';

const JobDetailsContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Sidebar />
          <MainCard />
        </Row>
      </Container>
    </Fragment >
  );
};

export default JobDetailsContain;