import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import DetailedSidebar from './DetailedSidebar';
import MainCard from './MainCard';

const KnowledgeDetailContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <DetailedSidebar />
          <MainCard />
        </Row>
      </Container>
    </Fragment>
  );
};
export default KnowledgeDetailContain;