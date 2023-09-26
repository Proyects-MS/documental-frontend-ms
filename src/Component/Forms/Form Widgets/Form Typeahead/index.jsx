import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';
import { BasicDemo, CustomSelections, MultipleSelections, Remote } from '../../../../Constant/index';
import CustomSelection from './CustomSelection';
import DefaultTypeahead from './DefaultTypeahead';
import Multiples from './Multiples';
import RemoteTypeahead from './Remote';

const FormTypeaheadContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="typeahead">
          <Row>
            <Col sm="12" xl="6">
              <Card>
                <CardHeader className="pb-0">
                  <H5>{BasicDemo}</H5><span>{'This is the simple demo for Typeahead.'}</span>
                </CardHeader>
                <DefaultTypeahead />
              </Card>
            </Col>
            <Col sm="12" xl="6">
              <Card>
                <CardHeader className="pb-0">
                  <H5>{MultipleSelections}</H5>
                </CardHeader>
                <Multiples />
              </Card>
            </Col>
            <Col sm="12" xl="6">
              <Card>
                <CardHeader className="pb-0">
                  <H5>{CustomSelections}</H5>
                </CardHeader>
                <CustomSelection />
              </Card>
            </Col>
            <Col sm="12" xl="6">
              <Card>
                <CardHeader className="pb-0">
                  <H5>{Remote}</H5><span>{'Remote data is only used when the data provided by local and prefetch is insufficient'}</span>
                </CardHeader>
                <CardBody>
                  <div id="remote">
                    <RemoteTypeahead />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default FormTypeaheadContain;