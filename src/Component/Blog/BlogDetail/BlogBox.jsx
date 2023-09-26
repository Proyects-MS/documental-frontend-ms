import React, { Fragment } from 'react';
import { Card, Col } from 'reactstrap';
import { P, Image, H4, UL, LI } from '../../../AbstractElements';
import { MarkJecno } from '../../../Constant';
import blog from '../../../assets/images/blog/blog.jpg';

const BlogBox = () => {
  return (
    <Fragment>
      <Col className="col-xxl-6 set-col-12 box-col-12 xl-40">
        <Card>
          <div className="blog-box blog-shadow">
            <Image
              attrImage={{
                className: 'img-fluid bg-img-cover',
                src: blog,
                alt: '',
              }}
            />
            <div className="blog-details">
              <P>{'25 July 2022'}</P>
              <H4>
                {'Accusamus et iusto odio dignissimos ducimus qui blanditiis.'}
              </H4>
              <UL attrUL={{ className: 'simple-list blog-social flex-row' }}>
                <LI><i className="icofont icofont-user"></i>{MarkJecno}</LI>
                <LI><i className="icofont icofont-thumbs-up"></i>{'02 Hits'}</LI>
                <LI><i className="icofont icofont-ui-chat"></i>{'598 Comments'}</LI>
              </UL>
            </div>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};

export default BlogBox;
