import React, { Fragment } from 'react';
import { Card, Col, Row } from 'reactstrap';
import { JavaLanguage, WebDevelopment } from '../../../Constant';
import { H6, Image, LI, P, UL } from '../../../AbstractElements';

const BlogBox = () => {
  return (
    <Fragment>
      <Col xl="12" sm='6'>
        <Card>
          <Row className="blog-box blog-list">
            <Col xl="5 col-12">
              <Image attrImage={{ className: 'img-fluid sm-100-w', src: `${require('../../../assets/images/faq/1.jpg')}`, alt: '' }} />
            </Col>
            <Col xl="7 col-12">
              <div className="blog-details">
                <div className="blog-date"><span>{'05'}</span> {'January 2022'}</div>
                <a href='#javascript'><H6>{JavaLanguage} </H6></a>
                <div className="blog-bottom-content">
                  <UL attrUL={{ className: 'simple-list blog-social flex-row' }} >
                    <LI>{'by: Paige Turner'}</LI>
                    <LI>{'15 Hits'}</LI>
                  </UL>
                  <hr />
                  <P attrPara={{ className: 'mt-0' }}>{'inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.'}</P>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col xl="12" sm='6'>
        <Card>
          <Row className="blog-box blog-list">
            <Col xl="5 col-12">
              <Image attrImage={{ className: 'img-fluid sm-100-w', src: `${require('../../../assets/images/faq/2.jpg')}`, alt: '' }} />
            </Col>
            <Col xl="7 col-12">
              <div className="blog-details">
                <div className="blog-date"><span>{'10'}</span> {'March 2022'}</div>
                <H6>{WebDevelopment} </H6>
                <div className="blog-bottom-content">
                  <UL attrUL={{ className: 'simple-list blog-social flex-row' }} >
                    <LI>{'by: Petey Cruiser'}</LI>
                    <LI>{'34 Hits'}</LI>
                  </UL>
                  <hr />
                  <P attrPara={{ className: 'mt-0' }} >{'inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.'}</P>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Fragment>
  );
};

export default BlogBox;