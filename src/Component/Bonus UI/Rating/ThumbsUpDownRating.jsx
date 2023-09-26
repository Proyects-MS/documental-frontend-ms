import React, { Fragment, useState } from 'react';
import Rating from 'react-rating';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { H5, H6 } from '../../../AbstractElements';
import { ThumbsUpDownRating } from '../../../Constant';

const ThumbsUpDownRatingClass = () => {
  const [thumbs, setThumbs] = useState(0);
  return (
    <Fragment>
      <Col xl="6" lg="12" md="6">
        <Card>
          <CardHeader className="pb-0">
            <H5>{ThumbsUpDownRating}</H5>
          </CardHeader>
          <CardBody>
            <Row className="rating">
              <Col sm="8">
                <Rating
                  initialRating={thumbs}
                  emptySymbol="fa fa-thumbs-down fa-2x"
                  fullSymbol="fa fa-thumbs-up fa-2x"
                  onHover={(rate) => setThumbs(rate)}
                >
                </Rating>
              </Col>
              <Col sm="4">
                <H6 attrH6={{ className: 'mb-0 text-end' }} >{'You Rated'} : {thumbs}</H6>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default ThumbsUpDownRatingClass;