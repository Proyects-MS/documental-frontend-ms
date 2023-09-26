import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import Sidebar from './Sidebar';
import CardsClass from './Cards';

const JobCardsContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Sidebar />
          <CardsClass />
        </Row>
      </Container>
    </Fragment>
  );
};

export default JobCardsContain;