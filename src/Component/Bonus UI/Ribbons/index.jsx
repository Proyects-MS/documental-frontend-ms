import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardHeader } from 'reactstrap';
import { ColoredBreadcrumb } from '../../../Constant';
import { H5 } from '../../../AbstractElements';
import RibbonClass from './RibbonClass';
import RibbonComponent from './RibbonCommon';

const RibbonsContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12" xl="12" md='12'>
            <Card>
              <CardHeader className="pb-0">
                <H5>{ColoredBreadcrumb}</H5><span>{'use class'} <code>{'.ribbons-colored .bg-primary'}</code></span>
              </CardHeader>
              <RibbonClass />
            </Card>
          </Col>

          <RibbonComponent />
        </Row>

      </Container>
    </Fragment>
  );
};

export default RibbonsContain;