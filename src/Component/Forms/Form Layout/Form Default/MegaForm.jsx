import { Btn, H6 } from '../../../../AbstractElements';
import { AccountInformation, BillingInformation, Cancel, CompanyInformation, CompanyName, ContactNumber, EmailAddress, Submit, Website, YourName } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Input } from 'react-bootstrap-typeahead';
import { CardBody, CardFooter, Col, Form, FormGroup, Label, Row } from 'reactstrap';

const MegaForms = () => {
  return (
    <Fragment>
      <CardBody>
        <Form className="theme-form mega-form">
          <H6>{AccountInformation}</H6>
          <FormGroup>
            <Label className="col-form-label">{YourName}</Label>
            <Input className="form-control" type="text" placeholder="your Name" />
          </FormGroup>
          <FormGroup>
            <Label className="col-form-label">{EmailAddress}</Label>
            <Input className="form-control" type="email" placeholder="Enter email" />
          </FormGroup>
          <FormGroup>
            <Label className="col-form-label">{ContactNumber}</Label>
            <Input className="form-control" type="Number" placeholder="Enter contact number" />
          </FormGroup>
          <hr className="mt-4 mb-4" />
          <H6>{CompanyInformation}</H6>
          <FormGroup>
            <Label className="col-form-label">{CompanyName}</Label>
            <Input className="form-control" type="text" placeholder="Company Name" />
          </FormGroup>
          <FormGroup>
            <Label className="col-form-label">{Website}</Label>
            <Input className="form-control" type="text" placeholder="Website" />
          </FormGroup>
        </Form>
        <hr className="mt-4 mb-4" />
        <H6 attrH6={{ className: 'pb-4 mb-0' }}>{BillingInformation}</H6>
        <Row className="theme-form billing-form form-space">
          <Col className="col-auto">
            <Input className="form-control" type="text" placeholder="Name On Card" />
          </Col>
          <Col className="col-auto">
            <Input className="form-control" type="text" name="inputPassword" placeholder="Card Number" />
          </Col>
          <Col className="col-auto">
            <Input className="form-control" type="text" name="inputPassword" placeholder="Zip Code" />
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <Btn attrBtn={{ color: 'primary', className: 'me-2' }}>{Submit}</Btn>
        <Btn attrBtn={{ color: 'secondary' }}>{Cancel}</Btn>
      </CardFooter>
    </Fragment>
  );
};
export default MegaForms;