import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import AllCards from './AllCards';

const UsersCardssContain = () => {
  return (
    <Fragment>
      <Container fluid={true} className="user-card">
        <Row>
          <AllCards />
        </Row>
      </Container>
    </Fragment>
  );
};
export default UsersCardssContain;