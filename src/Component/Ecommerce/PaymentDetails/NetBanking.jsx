import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Row } from 'reactstrap';
import { Btn, H5 } from '../../../AbstractElements';
import { BankName, NetBanking, Submit } from '../../../Constant';

const NetBankings = () => {
  return (
    <Fragment>
      <Col lg="6 col-xxl-4 box-col-6">
        <Card>
          <CardHeader className="pb-0 py-4">
            <H5>{NetBanking}</H5>
          </CardHeader>
          <CardBody>
            <Row className="theme-form">
              <FormGroup className="mb-3 col-12">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="AC Holder name"
                />
              </FormGroup>
              <FormGroup className="mb-3 col-12">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Account number"
                />
              </FormGroup>
              <FormGroup className="mb-3 col-6 p-r-0">
                <select className="form-control" size="1">
                  {BankName.map((name, i) =>
                    <option key={i}>{name}</option>
                  )}
                </select>
              </FormGroup>
              <FormGroup className="mb-3 col-6">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="ICFC code"
                />
              </FormGroup>
              <FormGroup className="mb-3 col-12">
                <Input
                  className="form-control"
                  type="number"
                  placeholder="Enter mobile number"
                />
              </FormGroup>
              <FormGroup className="mb-3 col-12">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Other Details"
                />
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
export default NetBankings;