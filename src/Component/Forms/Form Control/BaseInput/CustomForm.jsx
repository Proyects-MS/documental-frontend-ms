import { Btn } from '../../../../AbstractElements';
import { Submit, Cancel, CustomSelect, UploadFile } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Row, Col, CardBody, CardFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const CustomForm = () => {
  return (
    <Fragment>
      <Form className="form theme-form">
        <CardBody>
          <Row>
            <Col>
              <FormGroup className="row">
                <Label className="col-sm-3 col-form-label">{UploadFile}</Label>
                <Col sm="9">
                  <Input className="form-control" type="file" />
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="row mb-0">
                <Label className="col-sm-3 col-form-label">{CustomSelect}</Label>
                <Col sm="9">
                  <Input type="select" name="select" className="custom-select form-control">
                    <option select="">{'Open this select menu'}</option>
                    <option defaultValue="1">{'One'}</option>
                    <option defaultValue="2">{'Two'}</option>
                    <option defaultValue="3">{'Three'}</option>
                  </Input>
                </Col>
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
export default CustomForm;