import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import Basic from '../../../_core/Ui-kits/PopOver/Basic';
import Directions from '../../../_core/Ui-kits/PopOver/Direction';
import HtmlContents from '../../../_core/Ui-kits/PopOver/HtmlConten';
import Offset from '../../../_core/Ui-kits/PopOver/Offset';

const PopOvers = (props) => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ui Kits" title="Popover" />
      <Container fluid={true}>
        <Row className="popover-main">
          <Basic />
          <Directions />
          <HtmlContents />
          <Offset />
        </Row>
      </Container>
    </Fragment>
  );
};
export default PopOvers;