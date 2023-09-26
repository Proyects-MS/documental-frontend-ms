import CartData from './CartData';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { CartTitle } from '../../../Constant';
import { H5 } from '../../../AbstractElements';

const ProductCartConatain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <div>
                <CardHeader className="pb-0">
                  <H5>{CartTitle}</H5>
                </CardHeader>
                <CardBody className="cart">
                  <Row>
                    <CartData />
                  </Row>
                </CardBody>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default ProductCartConatain;
