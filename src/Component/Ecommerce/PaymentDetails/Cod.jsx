import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Row } from 'reactstrap';
import { Btn, H5 } from '../../../AbstractElements';
import { COD, Submit } from '../../../Constant';

const CashonDelivery = () => {
  return (
    <Fragment>
      <Col lg="6 col-xxl-4  box-col-6">
        <Card>
          <CardHeader className="pb-0 py-4">
            <H5>{COD}</H5>
          </CardHeader>
          <CardBody>
            <Row className="theme-form">
              <FormGroup className="mb-3 col-6 p-r-0">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Last name"
                />
              </FormGroup>
              <FormGroup className="mb-3 col-6 p-r-0">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Pincode"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Input
                  className="form-control"
                  type="number"
                  placeholder="Enter mobile number"
                />
              </FormGroup>
              <FormGroup className="mb-3 col-6 p-r-0">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="State"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="City"
                />
              </FormGroup>
              <FormGroup className="mb-3 col-12">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Address"
                ></textarea>
              </FormGroup>
              <div className="col-12">
                <Btn attrBtn={{ color: 'primary', className: 'btn btn-primary btn-block' }}>
                  {Submit}
                </Btn>
              </div>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default CashonDelivery;