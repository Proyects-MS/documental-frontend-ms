import React from 'react';
import Slider from 'react-slick';
import { NewProducts } from '../../../Constant';
import { H6 } from '../../../AbstractElements';
import SliderData from './SliderData';

const PrizeRange = () => {
  var settings = {
    slidesToShow: 1,
    swipeToSlide: false,
    arrows: false,
    dots: false,
  };
  const star = <span>
    <i className="fa fa-star font-warning me-1"></i>
    <i className="fa fa-star font-warning me-1"></i>
    <i className="fa fa-star font-warning me-1"></i>
    <i className="fa fa-star font-warning me-1"></i>
    <i className="fa fa-star font-warning"></i>
  </span>;
  return (
    <div className="product-filter pb-0 new-products">
      <H6 attrH6={{ className: 'f-w-600' }}>{NewProducts}</H6>
      <div className="owl-carousel owl-theme" id="testimonial">
        <Slider {...settings}>
          <SliderData star={star} />
          <SliderData star={star} />
        </Slider >
      </div >
    </div >
  );
};

export default PrizeRange;