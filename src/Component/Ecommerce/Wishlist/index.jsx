import { H5 } from '../../../AbstractElements';
import { WishlistTitle } from '../../../Constant';
import WishListData from './WishListData';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const WishListContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{WishlistTitle}</H5>
              </CardHeader>
              <CardBody>
                <Row className="wishlist-main">
                  <WishListData />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

    </Fragment>
  );
};
export default WishListContain;