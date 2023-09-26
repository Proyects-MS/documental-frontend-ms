import React, { useContext, useEffect, useRef, useState, Fragment } from 'react';
import Slider from 'react-slick';
import { Col, Media } from 'reactstrap';
import ProductContext from '../../../_helper/ecommerce/product';
import { Image } from '../../../AbstractElements';

const ImageSlider = () => {
  const { productItem, isVertical } = useContext(ProductContext);
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);
  const { nav1, nav2 } = state;
  var images = require.context('../../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      <Col xl="9" className="product-main box-col-8">
        <div className="pro-slide-single">
          <Slider
            asNavFor={nav2}
            arrows={false}
            ref={(slider) => (slider1.current = slider)}
          >
            {productItem ? (
              productItem.map((item) => {
                return item.variants.map((items, id) => (
                  <Image
                    attrImage={{
                      src: `${dynamicImage(items.images)}`,
                      alt: '',
                      className: 'img-fluid',
                    }}
                    key={id}
                  />
                ));
              })
            ) : (
              <Media src={productItem.img} alt="" className="img-fluid" />
            )}
          </Slider>
        </div>
      </Col>
      <Col xl="3" className="product-thumbnail box-col-3">
        <div className="pro-slide-right">
          <Slider
            asNavFor={nav1}
            ref={(slider) => (slider2.current = slider)}
            slidesToShow={3}
            speed={500}
            swipeToSlide={true}
            focusOnSelect={true}
            vertical={isVertical ? false : true}
          >
            {productItem
              && productItem.map((item) => {
                return item.variants.map((items, id) => (
                  <Image
                    attrImage={{
                      src: `${dynamicImage(items.images)}`,
                      alt: '',
                      className: 'img-fluid',
                    }}
                    key={id}
                  />
                ));
              })}
          </Slider>
        </div>
      </Col>
    </Fragment>
  );
};
export default ImageSlider;