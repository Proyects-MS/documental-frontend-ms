import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import GridOptionsCard from '../../../_core/Ui-kits/Grid/GridOptions';
import GridColumnCard from '../../../_core/Ui-kits/Grid/GridColumn';
import OneColumnWidthCard from '../../../_core/Ui-kits/Grid/OneColumnWidth';
import VerticalAlignCard from '../../../_core/Ui-kits/Grid/VerticalAlign';
import HorizontalAlignCard from '../../../_core/Ui-kits/Grid/HorizontalAlign';
import NestingColCard from '../../../_core/Ui-kits/Grid/NestingColumn';
import OrderCard from '../../../_core/Ui-kits/Grid/Order';
import OffsetCard from '../../../_core/Ui-kits/Grid/Offset';
import { Breadcrumbs } from '../../../AbstractElements';

const Grid = (props) => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ui Kits" title="Grid" />
      <Container fluid={true}>
        <Row>
          <GridOptionsCard />
          <GridColumnCard />
          <OneColumnWidthCard />
          <VerticalAlignCard />
          <HorizontalAlignCard />
          <NestingColCard />
          <OrderCard />
          <OffsetCard />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Grid;