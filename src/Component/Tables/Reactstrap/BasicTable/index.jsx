import BasicTableClass from './BasicTableClass';
import InverseTableClass from './InverseTableClass';
import HoverableRowsClass from './HoverableRows';
import ContextualClasses from './ContextualClasses';
import TextClass from './TextClass';
import TableClass from './TableClass';
import StripedRowClass from './StripedRowClass';
import StripeInverseClass from './StripInverseClass';
import CaptionClass from './Caption';
import ResponsiveClass from './ResponsiveClass';
import BreckpointClass from './BreckpointClass';
import TableHeadClass from './TableHeadClass';
import InversePrimaryClass from './InversTableClass';
import { Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';


const BasicTablesContain = () => {
    return (
      <Fragment>
        <Container fluid={true}>
          <Row>
            <BasicTableClass />
            <InverseTableClass />
            <InversePrimaryClass />
            <HoverableRowsClass />
            <ContextualClasses />
            <TextClass />
            <TableClass />
            <TableHeadClass />
            <StripedRowClass />
            <StripeInverseClass />
            <CaptionClass />
            <ResponsiveClass />
            <BreckpointClass />
          </Row>
        </Container>
      </Fragment>
    );
};

export default BasicTablesContain;