import React, { Fragment } from 'react';
import { Card, CardHeader, Col, Container, Row } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import OrderTableData from './OrderTableData';

const OrderHistoryContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>Order history</H5>
              </CardHeader>
              <OrderTableData />
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default OrderHistoryContain;