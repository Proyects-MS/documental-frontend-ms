import { BasicFormControl, BasicHTMLInputControl, CustomControls, EdgesInputStyle, FlatInputStyle, InputSizing, RaiseInputStyle, SolidInputStyle } from '../../../../Constant';
import { H5 } from '../../../../AbstractElements';
import BasicForm from './BasicForm';
import BasicHtmlForm from './BasicHtmlForm';
import EdgesInputForm from './EdgeInputForm';
import FlateInputForm from './FlateInputForm';
import RaiseInputForm from './RaiseInputForm';
import SolidInputForm from './SolidInputForm';
import InputSizeForm from './InputSizingForm';
import CustomForm from './CustomForm';
import { Card, CardHeader, Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const BaseInputContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{BasicFormControl}</H5>
              </CardHeader>
              <BasicForm />
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <H5>{BasicHTMLInputControl}</H5>
              </CardHeader>
              <BasicHtmlForm />
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <H5>{EdgesInputStyle}</H5>
              </CardHeader>
              <EdgesInputForm />
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <H5>{FlatInputStyle}</H5>
              </CardHeader>
              <FlateInputForm />
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <H5>{RaiseInputStyle}</H5>
              </CardHeader>
              <RaiseInputForm />
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <H5>{SolidInputStyle}</H5>
              </CardHeader>
              <SolidInputForm />
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <H5>{InputSizing}</H5>
              </CardHeader>
              <InputSizeForm />
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <H5>{CustomControls}</H5>
              </CardHeader>
              <CustomForm />
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default BaseInputContain;