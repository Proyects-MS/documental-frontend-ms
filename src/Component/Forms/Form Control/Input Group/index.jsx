import { H5, Btn } from '../../../../AbstractElements';
import { BasicInputGroups, Submit, Cancel } from '../../../../Constant';
import BacicGroup from './BasicGroup';
import BacicGroup2 from './BasicGroup2';
import { Card, CardBody, CardHeader, Col, Container, Row, CardFooter } from 'reactstrap';
import React, { Fragment } from 'react';

const InputGroupsContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{BasicInputGroups}</H5>
              </CardHeader>
              <CardBody>
                <BacicGroup />
              </CardBody>
              <CardFooter>
                <Btn attrBtn={{ color: 'primary', type: 'submit', className: 'me-2' }}>{Submit}</Btn>
                <Btn attrBtn={{ color: 'light', type: 'reset' }}>{Cancel}</Btn>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <H5>{BasicInputGroups}</H5>
              </CardHeader>
              <CardBody>
                <BacicGroup2 />
              </CardBody>
              <CardFooter>
                <Btn attrBtn={{ color: 'primary', type: 'submit', className: 'me-2' }}>{Submit}</Btn>
                <Btn attrBtn={{ color: 'light', type: 'reset' }}>{Cancel}</Btn>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default InputGroupsContain;