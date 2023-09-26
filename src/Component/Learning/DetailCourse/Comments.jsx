import React, { Fragment } from 'react';
import { CardBody, Col, Media, Row } from 'reactstrap';
import { H4, H6, Image, LI, P, UL } from '../../../AbstractElements';
import { Comment, JolioMark } from '../../../Constant';
import Comments1 from './Comments1';

const Comments = () => {
  const Imagess = true;
  return (
    <Fragment>
      <CardBody>
        <H4>{Comment}</H4>
        <UL attrUL={{ className: 'simple-list' }}>
          <Comments1 />
          <LI>
            <UL attrUL={{ className: 'simple-list ' }}>
              <LI>
                <Media >
                  <Image attrImage={{ src: `${require('../../../assets/images/blog/9.jpg')}`, alt: '' }} />
                  <Media body>
                    <Row>
                      <Col xl="12">
                        <H6 attrH6={{ className: 'mt-0' }} >{JolioMark}
                          <span> {'( Designer )'}</span>
                        </H6>
                      </Col>
                    </Row>
                    <P>{'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'}</P>
                  </Media>
                </Media>
              </LI>
            </UL>
          </LI>
          <Comments1 Imagess={Imagess} />
        </UL>
      </CardBody>
    </Fragment>
  );
};

export default Comments;