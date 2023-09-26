import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import Basic from '../../../_core/Ui-kits/Tooltip/Basic';
import Directions from '../../../_core/Ui-kits/Tooltip/Direction';
import HtmlElement from '../../../_core/Ui-kits/Tooltip/HtmlElement';
import Offset from '../../../_core/Ui-kits/Tooltip/Offset';

const Tooltips = (props) => {

  return (
    <Fragment>
      <Breadcrumbs parent="Ui Kits" title="Tooltip" />
      <Container fluid={true}>
        <Row>
          <Basic />
          <Directions />
          <HtmlElement />
          <Offset />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Tooltips;