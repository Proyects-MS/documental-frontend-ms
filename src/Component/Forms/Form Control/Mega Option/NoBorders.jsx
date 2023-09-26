import { Btn, H5, H6, P } from '../../../../AbstractElements';
import { Cancel, COD, Fast, NoBorder, Submit } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Col, Form, Input, Label, Media, Row } from 'reactstrap';

const NoBorders = () => {
  return (
    <Fragment>
      <Col sm="12" xl="6 box-col-12">
        <Card>
          <CardHeader className="pb-0">
            <H5>{NoBorder}</H5><span>{'By adding .plain-style class to .mega-inline You can archive this style'}</span>
          </CardHeader>
          <CardBody>
            <Form className="mega-inline plain-style">
              <Row>
                <Col sm="6">
                  <Card>
                    <Media className="p-20">
                      <div className="radio radio-primary me-3">
                        <Input id="radio11" type="radio" name="radio1" value="option1" />
                        <Label for="radio11"></Label>
                      </div>
                      <Media body>
                        <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{COD}<span className="badge badge-primary pull-right digits">{'50 INR'}</span></H6>
                        <P>{'Estimated 1 Day Shipping ( Duties end tax may be due delivery )'}</P>
                      </Media>
                    </Media>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card>
                    <Media className="p-20">
                      <div className="radio radio-secondary me-3">
                        <Input id="radio12" type="radio" name="radio1" value="option1" />
                        <Label for="radio12"></Label>
                      </div>
                      <Media body>
                        <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{Fast}<span className="badge badge-secondary pull-right digits">{'50 INR'}</span></H6>
                        <P>{'Estimated 1 Day Shipping ( Duties end tax may be due delivery )'}</P>
                      </Media>
                    </Media>
                  </Card>
                </Col>
              </Row>
            </Form>
          </CardBody>
          <CardFooter className="text-end">
            <Btn attrBtn={{ color: 'primary', className: 'm-r-15', type: 'submit' }}>{Submit}</Btn>
            <Btn attrBtn={{ color: 'light', type: 'submit' }}>{Cancel}</Btn>
          </CardFooter>
        </Card>
      </Col>
    </Fragment>
  );
};
export default NoBorders;