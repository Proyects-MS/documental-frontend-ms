import { H5 } from '../../../../AbstractElements';
import { AnimatedCheckboxButtons, AnimatedRadioButtons, CustomCheckbox, CustomRadio, SquareCheckbox } from '../../../../Constant';
import AnimatedCheckbox from './AnimatedCheckbox';
import AnimatedRadio from './AnimatedRadio';
import CustomCheckboxs from './CustomCheckbox';
import CustomRadios from './CustomRadio';
import SquareCheckboxs from './SquareCheckboxs';
import { Container, Row, Col, Card, CardHeader } from 'reactstrap';
import React, { Fragment } from 'react';

const RadioCheckboxContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col md="6">
            <Card>
              <CardHeader className="pb-0">
                <H5>{CustomRadio}</H5>
              </CardHeader>
              <CustomRadios />
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader className="pb-0">
                <H5>{CustomCheckbox}</H5>
              </CardHeader>
              <CustomCheckboxs />
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader className="pb-0">
                <H5>{AnimatedRadioButtons}</H5>
              </CardHeader>
              <AnimatedRadio />
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader className="pb-0">
                <H5>{AnimatedCheckboxButtons}</H5>
              </CardHeader>
              <AnimatedCheckbox />
            </Card>
          </Col>
          <Col md="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{SquareCheckbox}</H5>
              </CardHeader>
              <SquareCheckboxs />
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default RadioCheckboxContain;