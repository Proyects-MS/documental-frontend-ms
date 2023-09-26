import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import Basic from './Basic';
import Advanced from './Advance';
import Alert from './Alert';

const SweetAlertsContain = () => {

  return (
    <Fragment>
      <Container fluid={true}>
        <Row>

          <Basic />

          <Advanced />

          <Alert />

        </Row>
      </Container>
    </Fragment>
  );
};

export default SweetAlertsContain;