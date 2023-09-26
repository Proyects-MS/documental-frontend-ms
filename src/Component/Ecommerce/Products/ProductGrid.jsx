import React, { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { Row, Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import ProductContext from '../../../_helper/ecommerce/product';
import CartContext from '../../../_helper/ecommerce/cart';
import { H4, LI, P, Image, UL, Btn } from '../../../AbstractElements';
import FilterContext from '../../../_helper/ecommerce/filter';
import { getVisibleproducts } from '../../../Services/Ecommerce.Service';
import ProductModal from './ProductModal';
import errorImg from '../../../assets/images/search-not-found.png';

const ProductGrid = () => {
  const { addToCart } = useContext(CartContext);
  const { productItem, symbol } = useContext(ProductContext);
  const layoutColumns = 3;
  const quantity = 1;
  const [dataid, setDataid] = useState();
  const [openModal, setOpenModal] = useState(false);
  const history = useNavigate();
  const onClickHandle = (i) => {
    setOpenModal(true);
    setDataid(i.id);
  };
  const AddToCarts = (item, quantity) => {
    addToCart(item, quantity);
    history(`${process.env.PUBLIC_URL}/ecommerce/cart`);
  };
  var images = require.context('../../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  const context = useContext(FilterContext);
  const products = getVisibleproducts(productItem, context.filter);
  return (
    <Fragment>
      <div className="product-wrapper-grid">
        <Row className="gridRow">
          {products ? products.map((item) => {
            return (
              <div id="gridId" className={`${layoutColumns === 3 ? 'col-xl-3 col-lg-6 col-sm-6 xl-4' : 'col-xl-' + layoutColumns}`} key={item.id}>
                <Card >
                  <div className="product-box">
                    <div className="product-img">
                      {(item.status === 'sale') &&
                        <span className="ribbon ribbon-danger">{item.status}</span>}
                      {(item.status === '50%') &&
                        <span className="ribbon ribbon-success ribbon-right">{item.status}</span>}
                      {(item.status === 'gift') &&
                        <span className="ribbon ribbon-secondary ribbon-vertical-left">
                          <i className="icon-gift">{item.status}</i></span>}
                      {(item.status === 'love') &&
                        <span className="ribbon ribbon-bookmark ribbon-vertical-right ribbon-info">
                          <i className="icon-heart">{item.status}</i></span>}
                      {(item.status === 'Hot') &&
                        <span className="ribbon ribbon ribbon-clip ribbon-warning">{item.status}
                        </span>} <Image attrImage={{ className: 'img-fluid', src: `${dynamicImage(item.img)}`, alt: '' }} />
                      <div className="product-hover">
                        <UL attrUL={{ className: 'simple-list' }}>
                          <LI><Btn attrBtn={{ color: 'transprant', type: 'button', onClick: () => AddToCarts(item, quantity) }}><i className="icon-shopping-cart"></i></Btn></LI>
                          <LI><Btn attrBtn={{ color: 'transprant', onClick: () => onClickHandle(item), type: 'button', datatoggle: 'modal', datatarget: '#exampleModalCenter' }}><i className="icon-eye" onClick={() => setOpenModal(true)}></i>
                          </Btn> </LI>
                        </UL>
                      </div>
                    </div>
                    <div className="product-details">
                      <div className="rating">
                        <i className="fa fa-star font-warning"></i>
                        <i className="fa fa-star font-warning"></i>
                        <i className="fa fa-star font-warning"></i>
                        <i className="fa fa-star font-warning"></i>
                        <i className="fa fa-star font-warning"></i>
                      </div>
                      <Link to={`${process.env.PUBLIC_URL}/ecommerce/productpage`}>
                        <H4>{item.name}</H4>
                      </Link><P>{item.note}</P> 
                      <div className="product-price">{symbol} {item.price} <del>{symbol} {item.discountPrice}</del></div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })
            : <Image attrImage={{ className: 'img-fluid m-auto', src: errorImg, alt: '' }} />}
          {openModal && <ProductModal value={openModal} setOpenModal={setOpenModal} dataid={dataid} />}
        </Row>
      </div>
    </Fragment>
  );
};
export default ProductGrid;