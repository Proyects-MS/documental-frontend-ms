import React, { Fragment, useState } from 'react';
import Rating from 'react-rating';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { StarRating } from '../../../Constant';
import { H5, H6 } from '../../../AbstractElements';

const StarRatingClass = () => {
  const [rating, setRating] = useState(5);
  return (
    <Fragment>
      <Col xl="6" lg="12" md="6">
        <Card>
          <CardHeader className="pb-0">
            <H5>{StarRating}</H5>
          </CardHeader>
          <CardBody>
            <Row className="rating">
              <Col sm="8">
                <Rating
                  initialRating={rating}
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                  onChange={(rate) => setRating(rate)}
                >
                </Rating>
              </Col>
              <Col sm="4">
                <H6 attrH6={{ className: 'mb-0 text-end' }} >{'You Rated'} : {rating}</H6>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default StarRatingClass;