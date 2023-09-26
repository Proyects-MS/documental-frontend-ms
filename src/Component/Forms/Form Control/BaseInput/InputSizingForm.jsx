import { Btn } from '../../../../AbstractElements';
import { Submit, Cancel, LargeInput, DefaultInput, SmallInput, LargeSelect, DefaultSelect, SmallSelect } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Row, Col, CardBody, CardFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const InputSizeForm = () => {
  return (
    <Fragment>
      <Form className="form theme-form">
        <CardBody>
          <Row>
            <Col>
              <FormGroup>
                <Label className="col-form-label-sm">{LargeInput}</Label>
                <Input className="form-control form-control-lg" type="text" placeholder="col-form-label-lg" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label>{DefaultInput}</Label>
                <Input className="form-control" type="text" placeholder="form-control" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label className="col-form-label-sm">{SmallInput}</Label>
                <Input className="form-control form-control-sm" type="text" placeholder="col-form-label-sm" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label>{LargeSelect}</Label>
                <Input type="select" name="select" className="form-control form-control-lg digits">
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
                <Label>{DefaultSelect}</Label>
                <Input type="select" name="select" className="form-control digits" >
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
                <Label>{SmallSelect}</Label>
                <Input type="select" name="select" className="form-control form-control-sm digits">
                  <option>{'1'}</option>
                  <option>{'2'}</option>
                  <option>{'3'}</option>
                  <option>{'4'}</option>
                  <option>{'5'}</option>
                </Input>
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
export default InputSizeForm;