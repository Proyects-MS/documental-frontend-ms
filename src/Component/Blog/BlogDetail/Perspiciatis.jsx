import React, { Fragment } from 'react';
import { Card, Col, Row } from 'reactstrap';
import { H6, Image, LI, P, UL } from '../../../AbstractElements';
import blog2 from '../../../assets/images/blog/blog-2.jpg';
import blog3 from '../../../assets/images/blog/blog-3.jpg';

const Perspiciatis = () => {
  return (
    <Fragment>
      <Col xl="12" md="6">
        <Card>
          <Row className="blog-box blog-list">
            <Col xl="6 col-12">
              <div className="blog-wrraper"><Image attrImage={{ className: 'img-fluid sm-100-w p-0', src: blog2, alt: '' }} /></div>
            </Col>
            <Col xl="6 col-12">
              <div className="blog-details">
                <div className="blog-date"><span>{'02'}</span> {'January 2022'}</div>
                <H6>{'Perspiciatis unde omnis iste natus error sit voluptatem'} </H6>
                <div className="blog-bottom-content">
                  <UL attrUL={{ className: 'simple-list flex-row blog-social' }}>
                    <LI>{'by: Admin'}</LI>
                    <LI>{'0 Hits'}</LI>
                  </UL><hr />
                  <P attrPara={{ className: 'mt-0' }} >{'inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.'}</P>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col xl="12" md="6">
        <Card>
          <Row className="blog-box blog-list">
            <Col xl="6 col-12">
              <div className="blog-wrraper"><Image attrImage={{ className: 'img-fluid sm-100-w p-0', src: blog3, alt: '' }} /></div>
            </Col>
            <Col xl="6 col-12">
              <div className="blog-details">
                <div className="blog-date"><span>{'03'}</span> {'January 2022'}</div>
                <H6>{'Perspiciatis unde omnis iste natus error sit voluptatem'} </H6>
                <div className="blog-bottom-content">
                  <UL attrUL={{ className: 'simple-list flex-row blog-social' }}>
                    <LI>{'by: Admin'}</LI>
                    <LI>{'02 Hits'}</LI>
                  </UL><hr />
                  <P attrPara={{ className: 'mt-0' }} >{'inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.'}</P>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Fragment >
  );
};

export default Perspiciatis;