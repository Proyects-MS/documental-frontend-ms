import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import Sidebar from '../JobCardView/Sidebar';
import ListCard from './ListCard';

const ListViewContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Sidebar />
          <ListCard />
        </Row>
      </Container>
    </Fragment>
  );
};

export default ListViewContain;