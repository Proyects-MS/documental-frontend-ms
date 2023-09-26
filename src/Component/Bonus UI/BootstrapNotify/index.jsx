import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import Basic from './Basic';
import CustomDirectionsClass from './CustomDirections';
import CustomAutocloseClass from './CustomAutoclose';

toast.configure();

const BootstrapNotifyContain = () => {

    return (
      <Fragment>
        <Container fluid={true}>
          <Row>
            <Basic />
            <CustomDirectionsClass />
            <CustomAutocloseClass />
          </Row>
        </Container>
      </Fragment>
    );
};

export default BootstrapNotifyContain;