import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import { Image, P } from '../../../AbstractElements';
import { FancyShirt, FancyShirtPrice } from '../../../Constant';
import one from '../../../../src/assets/images/ecommerce/01.jpg';
import two from '../../../../src/assets/images/ecommerce/02.jpg';
import three from '../../../../src/assets/images/ecommerce/03.jpg';

const SliderData = (props) => {
    const { star = '' } = props;
    return (
        <Fragment>
            <div className="item">
                <Row className="product-box">
                    <Col md="6" className="product-img me-3">
                        <Image attrImage={{ className: 'img-fluid', src: `${one}`, alt: '' }} />
                    </Col>
                    <Col md="6" className="product-details text-start"> {star}
                        <P attrPara={{ className: 'mb-0' }}>{FancyShirt}</P>
                        <div className="product-price">{FancyShirtPrice}</div>
                    </Col>
                </Row>
                <Row className="product-box">
                    <Col md="6" className="product-img me-3">
                        <Image attrImage={{ className: 'img-fluid', src: `${two}`, alt: '' }} />
                    </Col>
                    <Col md="6" className="product-details text-start"> {star}
                        <P attrPara={{ className: 'mb-0' }}>{FancyShirt}</P>
                        <div className="product-price">{FancyShirtPrice}</div>
                    </Col>
                </Row>
                <Row className="product-box">
                    <Col md="6" className="product-img me-3">
                        <Image attrImage={{ className: 'img-fluid', src: `${three}`, alt: '' }} />
                    </Col>
                    <Col md="6" className="product-details text-start"> {star}
                        <P attrPara={{ className: 'mb-0' }}>{FancyShirt}</P>
                        <div className="product-price">{FancyShirtPrice}</div>
                    </Col>
                </Row>
            </div >
        </Fragment>
    );
};
export default SliderData;