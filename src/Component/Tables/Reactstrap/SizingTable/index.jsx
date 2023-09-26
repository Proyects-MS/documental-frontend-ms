import DefaultTableClass from './DefaultTable';
import ExtraLargeTablesClass from './ExtraLargeTables';
import ExtraSmallTableClass from './ExtraSmallTable';
import LargeTableClass from './LargeTable';
import SmallTableClass from './SmallTable';
import { Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const SizingTableContain = () => {
    return (
      <Fragment>
        <Container fluid={true}>
          <Row>
            <ExtraLargeTablesClass />
            <LargeTableClass />
            <DefaultTableClass />
            <SmallTableClass />
            <ExtraSmallTableClass />
          </Row>
        </Container>
      </Fragment>
    );
};

export default SizingTableContain;