import React, { Fragment, useState } from 'react';
import Ratings from 'react-ratings-declarative';
import { H3 } from '../../../AbstractElements';
import { ProductReview } from '../../../Constant';

const StarRatings = () => {
  const [rating, setRating] = useState(0);
  const changeRating = (newRating) => {
    setRating(newRating);
  };
  return (
    <Fragment>
      <div className="product-page-details mt-0"><H3>{'Women Pink shirt.'}</H3>
        <div className="pro-review"><div className="d-flex">
          <Ratings rating={rating} widgetRatedColors="blue" widgetDimensions="20px"
            widgetSpacings="0px" changeRating={changeRating}>
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings><span>{ProductReview}</span> </div> </div>
      </div>
    </Fragment>
  );
};
export default StarRatings;