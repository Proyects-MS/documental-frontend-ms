import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import Basic from '../../../_core/Ui-kits/Progress/Basic/index';
import Small from '../../../_core/Ui-kits/Progress/Small/index';
import Large from '../../../_core/Ui-kits/Progress/Large/index';
import Custom from '../../../_core/Ui-kits/Progress/Custom/index';
import States from '../../../_core/Ui-kits/Progress/States/index';
import MultiBars from '../../../_core/Ui-kits/Progress/MultiBars/index';
import Striped from '../../../_core/Ui-kits/Progress/Stripped/index';
import Animated from '../../../_core/Ui-kits/Progress/Animated/index';

const Progressbars = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ui Kits" title="Progress" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Basic />
            <Small />
            <Large />
            <Custom />
            <States />
            <MultiBars />
            <Striped />
            <Animated />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Progressbars;