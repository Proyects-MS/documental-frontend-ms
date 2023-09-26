import React, { Fragment } from 'react';
import Rating from 'react-rating';
import { Col, Card, CardBody, CardHeader } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import { PillRating } from '../../../Constant';

const PillRatingClass = () => {
  return (
    <Fragment>
      <Col xl="6" lg="12" md="6">
        <Card>
          <CardHeader className="pb-0">
            <H5>{PillRating}</H5>
          </CardHeader>
          <CardBody>
            <div className="rating-container">
              <Rating
                className="rating"
                emptySymbol={<span style={{ margin: '10px' }}>---</span>}
                fullSymbol={['A', 'B', 'C', 'D', 'E'].map(n => <span style={{ fontSize: '20px' }}>{n}</span>)}
                onClick={(rate) => alert(rate)}
              >
              </Rating>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default PillRatingClass;