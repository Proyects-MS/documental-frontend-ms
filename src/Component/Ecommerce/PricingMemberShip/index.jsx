import React, { Fragment } from 'react';
import { Card, Col, Container, Row, CardHeader } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import { Pricings, SimplePricingCard } from '../../../Constant/index';
import Standards from './Standard';
import StandardPricingcard from './StandardProcingCard';

const PricingMembershipContain = () => {
  return (
    <Fragment>
      <Container fluid={true} >
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className='pb-0'>
                <H5>{SimplePricingCard}</H5>
              </CardHeader>
              <StandardPricingcard />
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader className='pb-0'>
                <H5>{Pricings}</H5>
              </CardHeader>
              <Standards />
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default PricingMembershipContain;