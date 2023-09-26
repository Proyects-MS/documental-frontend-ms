import React, { useContext, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, Card, CardBody, Table } from 'reactstrap';
import { Btn, LI, P, UL } from '../../../AbstractElements';
import { Brand, Availability, AddToCart, BuyNow } from '../../../Constant';
import ProductContext from '../../../_helper/ecommerce/product';
import WishtListContext from '../../../_helper/ecommerce/wishlist';
import SocialIcons from './socialIcons';
import StarRatings from './StarRating';

const ProductDetails = () => {
  const { productItem, symbol } = useContext(ProductContext);
  const productss = {
    'price': productItem[0]?.price,
    'discountPrice': productItem[0]?.discountPrice,
    'discription': productItem[0]?.discription,
    'stock': productItem[0]?.stock
  };
  const history = useNavigate();
  const { addToWishList } = useContext(WishtListContext);
  const singleItem = productItem;
  const addWishList = (product) => {
    addToWishList(product);
    history(`${process.env.PUBLIC_URL}/ecommerce/wishlist`);
  };
  return (
    <Fragment>
      <Col xl="5" className="box-col-12 proorder-xl-3 xl-100">
        <Card>
          <CardBody>
            <div className="pro-group pt-0 border-0">
              <StarRatings />
              <div className="product-price">{symbol}{productss.price}<del>{symbol}{productss.discountPrice}</del></div>
              <UL attrUL={{ className: 'simple-list product-color flex-row' }}>
                <LI attrLI={{ className: 'bg-primary' }}></LI>&nbsp;
                <LI attrLI={{ className: 'bg-secondary' }}></LI>&nbsp;
                <LI attrLI={{ className: 'bg-success' }}></LI>&nbsp;
                <LI attrLI={{ className: 'bg-info' }}></LI>&nbsp;
                <LI attrLI={{ className: 'bg-warning' }}></LI>&nbsp;
              </UL>
              <Link to={`${process.env.PUBLIC_URL}/ecommerce/checkout`}>
                <Btn attrBtn={{ color: 'none', className: 'btn btn-secondary mt-0' }}>
                  <i className="fa fa-shopping-cart me-2"></i>{BuyNow}</Btn></Link> </div>
            <div className="pro-group"> <P>{productss.discription}The point of using Lorem Ipsum is that.</P></div><div className="pro-group">
              <Row>
                <Col md="6">
                  <Table borderless>
                    <tbody>
                      <tr>
                        <td><b>{Brand} &nbsp;&nbsp;&nbsp;:</b></td>
                        <td>{'Pixelstrap'}</td>
                      </tr>
                      <tr>
                        <td><b>{Availability} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
                        <td className="txt-success"> {productss.stock} </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col md="6">
                  <Table borderless>
                    <tbody>
                      <tr>
                        <td> <b>{'Seller'} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
                        <td>{'ABC'}</td>
                      </tr>
                      <tr>
                        <td><b>{'Fabric'}&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</b></td>
                        <td>{'Cotton'}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div><SocialIcons />
            <div className="pro-group pb-0">
              <div className="pro-shop"><Link to={`${process.env.PUBLIC_URL}/ecommerce/cart`}>
                <Btn attrBtn={{ color: 'primary', className: 'btn btn-primary m-r-10' }}>
                  <i className="fa fa-shopping-basket me-2"></i>{AddToCart}</Btn>
              </Link>
                <Btn attrBtn={{ color: 'secondary', className: 'btn btn-danger', onClick: () => addWishList(singleItem) }}> <i className="fa fa-heart me-2"></i>{'Add To WishList'} </Btn>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment >
  );
};
export default ProductDetails;