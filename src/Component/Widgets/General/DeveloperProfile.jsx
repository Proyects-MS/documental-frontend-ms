import React, { Fragment } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import CountUp from 'react-countup';
import { H3, H5, LI, P, UL, Image } from '../../../AbstractElements';
import UserDp from '../../../assets/images/user/user-dp.png';
import { KelvinELedbetter, Loss, NewOrder, Profit } from '../../../Constant';

const DeveloperProfile = () => {
  return (
    <Fragment>
      <Col xl="4" className='box-col-12 lg-100'>
        <Row>
          <Col xl='12' lg='6' className='box-col-6 lg-50'>
            <Card className="testimonial">
              <CardBody>
                <Image attrImage={{ className: 'img-90 user-img', src: `${UserDp}`, alt: '' }} />
                <H5>{KelvinELedbetter}</H5>
                <P>
                  Contrary to popular belief, Lorem Ipsum is not simply
                  random text. It has roots in a piece of classical Latin
                  literature from 45 BC, making it over 2000 years old.
                </P>
              </CardBody>
            </Card>
          </Col>
          <Col xl='12' lg='6' className='box-col-6 lg-50'>
            <Card className="order-widget">
              <CardBody>
                <Row className="heder-widget">
                  <Col xs="6"><span>{NewOrder}</span>
                    <H3><CountUp className="total-num counter" end={25639} /></H3>
                  </Col>
                  <Col xs="6">
                    <div className="text-end">
                      <UL attrUL={{ as: 'ul', className: 'simple-list ' }}>
                        <LI>{Profit}<span className="product-stts font-primary m-l-10">8989<i className="icon-angle-up f-12 m-l-10"></i></span></LI>
                        <LI>{Loss}<span className="product-stts font-primary m-l-10">2560<i className="icon-angle-down f-12 m-l-10"></i></span></LI>
                      </UL>
                    </div>
                  </Col>
                </Row>
                <div className="new-order">
                  <div>
                    <div className="progress sm-progress-bar">
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }}
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col >
    </Fragment >
  );
};
export default DeveloperProfile;