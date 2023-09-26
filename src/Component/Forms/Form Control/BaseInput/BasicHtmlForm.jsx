import { Btn } from '../../../../AbstractElements';
import { Password, Submit, Cancel, SimpleInput, Placeholder, Date, Month, Time, ColorPicker, MaximumLength, Textarea, StaticText, Telephone, DateAndTime, Week, Number, URL } from '../../../../Constant';
import React, { Fragment } from 'react';
import { CardBody, CardFooter, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const BasicHtmlForm = () => {
  return (
    <Fragment>
      <Form className="form theme-form">
        <CardBody>
          <Row>
            <Col>
              <FormGroup className="row">
                <Label className="col-sm-3 col-form-label">{SimpleInput}</Label>
                <Col sm="9">
                  <Input className="form-control" type="text" />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="col-sm-3 col-form-label">{Placeholder}</Label>
                <Col sm="9">
                  <Input className="form-control" type="text" placeholder="Type your title in Placeholder" />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="col-sm-3 col-form-label">{Password}</Label>
                <Col sm="9">
                  <Input className="form-control" type="password" placeholder="Password input" />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="col-sm-3 col-form-label">{Number}</Label>
                <Col sm="9">
                  <Input className="form-control digits" type="number" placeholder="Number" />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="col-sm-3 col-form-label">{Telephone}</Label>
                <Col sm="9">
                  <Input className="form-control m-input digits" type="tel" defaultValue="91-(999)-999-999" />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="col-sm-3 col-form-label">{URL}</Label>
                <Col sm="9">
                  <Input className="form-control" type="url" defaultValue="https://getbootstrap.com" />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="col-sm-3 col-form-label">{DateAndTime}</Label>
                <Col sm="9">
                  <Input className="form-control digits" id="example-datetime-local-input" type="datetime-local" defaultValue="2022-01-19T18:45:00" />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="col-sm-3 col-form-label">{Date}</Label>
                <Col sm="9">
                  <Input className="form-control digits" type="date" defaultValue="2022-01-01" />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="col-sm-3 col-form-label">{Month}</Label>
                <Col sm="9">
                  <Input className="form-control digits" type="month" defaultValue="2022-01" />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="col-sm-3 col-form-label">{Week}</Label>
                <Col sm="9">
                  <Input className="form-control digits" type="week" defaultValue="2022-W09" />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="col-sm-3 col-form-label">{Time}</Label>
                <Col sm="9">
                  <Input className="form-control digits" type="time" defaultValue="21:45:00" />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="col-sm-3 col-form-label pt-0">{ColorPicker}</Label>
                <Col sm="9">
                  <Input className="form-control-color" style={{ height: '40px' }} type="color" defaultValue="#563d7c" />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="col-sm-3 col-form-label">
                  {MaximumLength}
                </Label>
                <Col sm="9">
                  <Input className="form-control" type="text" placeholder="Content must be in 6 characters" maxLength="6" />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="col-sm-3 col-form-label pt-0">{StaticText}</Label>
                <Col sm="9">
                  <div className="form-control-static">
                    {'Hello !... This is static text'}

                  </div>
                </Col>
              </FormGroup>
              <FormGroup className="row mb-0">
                <Label className="col-sm-3 col-form-label">{Textarea}</Label>
                <Col sm="9">
                  <textarea className="form-control" rows="5" cols="5" placeholder="Default textarea"></textarea>
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
export default BasicHtmlForm;