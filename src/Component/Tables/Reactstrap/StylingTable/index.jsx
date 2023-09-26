import DefultStylingClass from './DefultStyling';
import TableBackgroundClass from './TableBackground';
import TableHeadOptionsClass from './TableHeadOptions';
import TableFooterStylingClass from './TableFooterStyling';
import CustomTableColorClass from './CustomTableColor';
import CustomHoverClass from './CustomeHover';
import { Container,Row } from 'reactstrap';
import React, { Fragment } from 'react';

const StylingTableContain = () => {
    return (
      <Fragment>
        <Container fluid={true}>
          <Row>
            <DefultStylingClass />
            <TableHeadOptionsClass />
            <TableBackgroundClass />
            <TableFooterStylingClass />
            <CustomTableColorClass />
            <CustomHoverClass />
          </Row>
        </Container>
      </Fragment>
    );
};

export default StylingTableContain;