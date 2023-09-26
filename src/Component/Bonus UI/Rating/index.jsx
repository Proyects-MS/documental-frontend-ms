import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import StarRatingClass from './StarRating';
import HeartRatingClass from './HeartRating';
import ThumbsUpDownRatingClass from './ThumbsUpDownRating';
import PillRatingClass from './PillRating';

const RatingClassContain = () => {

    return (
      <Fragment>
        <Container fluid={true}>
          <Row>
            <StarRatingClass />
            <HeartRatingClass />
            <ThumbsUpDownRatingClass />
            <PillRatingClass />
          </Row>
        </Container>
      </Fragment >
    );
};

export default RatingClassContain;