import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import DefaultLists from '../../../_core/Ui-kits/Lists/DefaultLists';
import { Breadcrumbs } from '../../../AbstractElements';
import LinksButtons from '../../../_core/Ui-kits/Lists/LinksButtons';
import FlushStyles from '../../../_core/Ui-kits/Lists/FlushStyle';
import ContextualClass from '../../../_core/Ui-kits/Lists/ContextualClasses';
import WithBadge from '../../../_core/Ui-kits/Lists/WithBadge';
import CustomContents from '../../../_core/Ui-kits/Lists/CustomContent';
import JavascriptBase from '../../../_core/Ui-kits/Lists/JavascriptBehaviour';
import WithIcons from '../../../_core/Ui-kits/Lists/WithIcon';
import WithImage from '../../../_core/Ui-kits/Lists/WithImage';
import WithImageRound from '../../../_core/Ui-kits/Lists/WithRoundImage';

const List = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ui Kits" title="Lists" />
      <Container fluid={true} className="listings">
        <Row>
          <DefaultLists />
          <LinksButtons />
          <FlushStyles />
          <ContextualClass />
          <WithBadge />
          <CustomContents />
          <JavascriptBase />
          <WithIcons />
          <WithImage />
          <WithImageRound />
        </Row>
      </Container>
    </Fragment>
  );
};

export default List;