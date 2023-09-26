import React, { Fragment, useState } from 'react';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import Rating from 'react-rating';
import { HeartRating } from '../../../Constant';
import { H5, H6 } from '../../../AbstractElements';

const HeartRatingClass = () => {
  const [heart, setHeart] = useState(0);
  return (
    <Fragment>
      <Col xl="6" lg="12" md="6">
        <Card>
          <CardHeader className="pb-0">
            <H5>{HeartRating}</H5>
          </CardHeader>
          <CardBody>
            <Row className="rating">
              <Col sm="8">
                <Rating
                  initialRating={heart}
                  emptySymbol="fa fa-heart-o fa-2x"
                  fullSymbol="fa fa-heart fa-2x"
                  onClick={(rate) => setHeart(rate)}
                >
                </Rating>
              </Col>
              <Col sm="4">
                <H6 attrH6={{ className: 'mb-0 text-end' }}>{'You Rated'} : {heart}</H6>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default HeartRatingClass;