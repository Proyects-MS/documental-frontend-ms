import { Btn } from '../../../../AbstractElements';
import { EmailAddress, Password, ExampleSelect, ExampleMultipleSelect, ExampleTextarea, Submit, Cancel } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Row, Col, CardBody, CardFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const FlateInputForm = () => {
  return (
    <Fragment>
      <Form className="form theme-form">
        <CardBody>
          <Row>
            <Col>
              <FormGroup>
                <Label>{EmailAddress}</Label>
                <Input className="form-control btn-square" type="email" placeholder="name@example.com" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label>{Password}</Label>
                <Input className="form-control btn-square" type="password" placeholder="Password" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label>{ExampleSelect}</Label>
                <Input type="select" name="select" className="form-control btn-square digits" >
                  <option>{'1'}</option>
                  <option>{'2'}</option>
                  <option>{'3'}</option>
                  <option>{'4'}</option>
                  <option>{'5'}</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label>{ExampleMultipleSelect}</Label>
                <Input type="select" name="select" className="form-control btn-square digits" multiple="">
                  <option>{'1'}</option>
                  <option>{'2'}</option>
                  <option>{'3'}</option>
                  <option>{'4'}</option>
                  <option>{'5'}</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="mb-0">
                <Label>{ExampleTextarea}</Label>
                <Input type="textarea" className="form-control btn-square" rows="3" />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
        <CardFooter className="text-end">
          <Btn attrBtn={{ color: 'primary', type: 'submit', className: 'me-2' }}>{Submit}</Btn>
          <Btn attrBtn={{ color: 'light', type: 'reset' }}>{Cancel}</Btn>
        </CardFooter>
      </Form>
    </Fragment>
  );
};
export default FlateInputForm;