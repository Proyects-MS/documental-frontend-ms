import BorderBottomClass from './BorderBottomClass';
import BorderlessClass from './BorderlessClass';
import BothBordedsClass from './BothBordedsClass';
import DashedBorderClass from './DashedBorderClass';
import DefaultTableClass from './DefaultTableClass';
import DottedBorderClass from './DottedBorderClass';
import DoubleBorderClass from './DoubleBorderClass';
import HorizontalTableClass from './HorizontalTableClass';
import SolidBorderClass from './SolidBorderClass';
import VerticalBordersClass from './VerticalBordersClass';
import { Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const BorderTableContain = () => {
    return (
      <Fragment>
        <Container fluid={true}>
          <Row>
            <HorizontalTableClass />
            <VerticalBordersClass />
            <BothBordedsClass />
            <BorderlessClass />
            <DefaultTableClass />
            <SolidBorderClass />
            <DoubleBorderClass />
            <DottedBorderClass />
            <DashedBorderClass />
            <BorderBottomClass />
          </Row>
        </Container>
      </Fragment>
    );
};

export default BorderTableContain;