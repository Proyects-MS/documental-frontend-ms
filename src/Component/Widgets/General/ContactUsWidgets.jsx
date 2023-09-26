import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Media } from 'reactstrap';
import { MoreHorizontal } from 'react-feather';
import { Btn, H5, LI, UL } from '../../../AbstractElements';
import { ContactUs, Done, Email, InProgress, Message, Pending, Rejected, SEND_IT, YourName } from '../../../Constant';

const ContactUsWidgets = () => {
  return (
    <Fragment>
      <Col sm="12" lg="6" xl="8" md="12" className="xl-50 box-col-6">
        <Card>
          <CardHeader>
            <Media>
              <Media body>
                <H5>{ContactUs}</H5>
              </Media>
              <div className="icon-box onhover-dropdown"><MoreHorizontal />
                <div className="icon-box-show onhover-show-div">
                  <UL>
                    <LI><a href='#javascript'> {Done}</a></LI>
                    <LI><a href='#javascript'>{Pending}</a></LI>
                    <LI><a href='#javascript'>{Rejected}</a></LI>
                    <LI><a href='#javascript'>{InProgress} </a></LI>
                  </UL>
                </div>
              </div>
            </Media>
          </CardHeader>
          <CardBody className="contact-form">
            <Form className="theme-form">
              <div className="form-icon"><i className="icofont icofont-envelope-open"></i></div>
              <FormGroup>
                <Label for="exampleInputName">{YourName}</Label>
                <Input className="form-control" id="exampleInputName" type="text" placeholder="John Dio" />
              </FormGroup>
              <FormGroup >
                <Label className="col-form-label" htmlFor="exampleInputEmail1">{Email}</Label>
                <Input className="form-control" id="exampleInputEmail1" type="email" placeholder="Demo@gmail.com" />
              </FormGroup>
              <FormGroup >
                <Label className="col-form-label" htmlFor="exampleInputEmail1">{Message}</Label>
                <Input className="form-control" type='textarea' rows="3" cols="50" placeholder="Your Message"></Input>
              </FormGroup>
              <div className="text-sm-end">
                <Btn attrBtn={{ color: 'primary', type: 'reset' }}>{SEND_IT}</Btn>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default ContactUsWidgets;