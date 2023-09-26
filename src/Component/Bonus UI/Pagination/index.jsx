import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import PagiNations from './PagiNations';
import PaginationActiveDisabled from './PaginationActiveDisabled';
import PaginationAlignment from './PaginationAlignment';
import PaginationWithIcons from './PaginationWithIcons';
import PaginationSizingClass from './PaginationSizing';
import PaginationColorClass from './PaginationColor';


const PaginationsContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <PagiNations />
          <PaginationWithIcons />
          <PaginationAlignment />
          <PaginationActiveDisabled />
          <PaginationColorClass />
          <PaginationSizingClass />
        </Row>
      </Container>
    </Fragment>
  );
};

export default PaginationsContain;