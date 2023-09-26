import React, { Fragment } from 'react';
import { Row, Col, Media, Card, CardBody } from 'reactstrap';
import comment from '../../assets/images/blog/comment.jpg';
import { Comment } from '../../Constant';
import { H4, H6, Image, LI, P, UL } from '../../AbstractElements';
import { BlogSingleData } from '../../Data/Blog/index';
import img from '../../assets/images/blog/9.jpg';

const BlogComments = () => {
  return (
    <Fragment>
      <Card className="comment-box">
        <CardBody>
          <H4>{Comment}</H4>
          <UL attrUL={{ className: 'simple-list' }}>
            {BlogSingleData.map((item) => {
              return (
                <Fragment key={item.id}>
                  {!item.class ? (
                    <LI>
                      <Media className="align-self-center">
                        <Image
                          attrImage={{
                            className: 'align-self-center',
                            src: `${comment}`,
                            alt: '',
                          }}
                        />
                        <Media body>
                          <Row>
                            <Col md="4">
                              <H6 attrH6={{ className: 'mt-0' }}>
                                {item.name}
                                <span> {`( ${item.post} ) `}</span>
                              </H6>
                            </Col>
                            <Col md="8">
                              <UL
                                attrUL={{
                                  className: 'comment-social simple-list',
                                }}
                              >
                                <LI>
                                  <i className="icofont icofont-thumbs-up"></i>
                                  {item.hits}
                                </LI>
                                <LI>
                                  <i className="icofont icofont-ui-chat"></i>
                                  {item.comments}
                                </LI>
                              </UL>
                            </Col>
                          </Row>
                          <P>{item.para}</P>
                        </Media>
                      </Media>
                    </LI>
                  ) : (
                    <LI>
                      <UL>
                        <LI>
                          <Media>
                            <Image
                              attrImage={{
                                className: 'align-self-center',
                                src: `${img}`,
                                alt: 'Generic placeholder image',
                              }}
                            />
                            <Media body>
                              <Row>
                                <Col xl="12">
                                  <H6 attrH6={{ className: 'mt-0' }}>
                                    {item.name}
                                    <span> {`( ${item.post} ) `}</span>
                                  </H6>
                                </Col>
                              </Row>
                              <P>{item.para}</P>
                            </Media>
                          </Media>
                        </LI>
                      </UL>
                    </LI>
                  )}
                </Fragment>
              );
            })}
          </UL>
        </CardBody>
      </Card>
    </Fragment>
  );
};
export default BlogComments;
