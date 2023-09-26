import React, { Fragment } from 'react';
import { Col, Media, Row } from 'reactstrap';
import { H6, Image, LI, P, UL } from '../../../AbstractElements';
import { JolioMark } from '../../../Constant';

const Comments1 = ({ Imagess }) => {
  return (
    <Fragment>
      <LI>
        <Media>
          {
            Imagess ?
              <Image attrImage={{ src: `${require('../../../assets/images/blog/4.jpg')}`, alt: '' }} />
              : <Image attrImage={{ src: `${require('../../../assets/images/blog/comment.jpg')}`, alt: '' }} />
          }
          <Media body>
            <Row>
              <Col md="4" className='xl-100'>
                <H6 attrH6={{ className: 'mt-0' }} >{JolioMark}
                  <span> {'( Designer )'}</span>
                </H6>
              </Col>
              <Col md="8" className='xl-100'>
                <UL attrUL={{ className: 'simple-list flex-row comment-social learning-comment' }} >
                  <LI attrLI={{ className: 'digits' }} >
                    <i className="icofont icofont-thumbs-up"></i>{'02 Hits'}
                  </LI>
                  <LI attrLI={{ className: 'digits' }}>
                    <i className="icofont icofont-ui-chat"></i>{'598 Comments'}
                  </LI>
                </UL>
              </Col>
            </Row>
            <P>{'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'}</P>
          </Media>
        </Media>
      </LI>
    </Fragment>
  );
};

export default Comments1;