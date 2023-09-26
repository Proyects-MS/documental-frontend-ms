import React, { Fragment, useContext } from 'react';
import { Card, Col, Row, CardBody, Media } from 'reactstrap';
import { H6, Image, LI, P, UL } from '../../../../AbstractElements';
import JobSearchContext from '../../../../_helper/JobSearch';

const CardsClass = () => {
  const { jobData } = useContext(JobSearchContext);
  return (
    <Fragment>
      <Col xl="9 xl-60" className="box-col-7">
        <Row>
          {jobData &&
            jobData.map((item, i) => (
              <Col xl="6 xl-100" className="box-col-12" key={i}>
                <Card
                  className={`${item.ribbion ? 'ribbon-vertical-left-wrapper' : ''
                    }`}
                >
                  {item.ribbion ? (
                    <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary">
                      <i className="icofont icofont-love"></i>
                    </div>
                  ) : (
                    ''
                  )}
                  <div className="job-search">
                    <CardBody>
                      <Media>
                        <Image
                          attrImage={{
                            className: 'img-40 img-fluid m-r-20',
                            src: `${require(`../../../../assets/images/${item.logo}`)}`,
                            alt: '',
                          }}
                        />
                        <Media body>
                          <H6 attrH6={{ className: 'f-w-600' }}>
                            <a href="#javascript">{item.job_name}</a>
                            {item.badgeValue === 'new' ? (
                              <span className="pull-right">
                                {item.type}
                              </span>
                            ) : (
                              <span className="badge badge-primary pull-right">{item.type}</span>
                            )}
                          </H6>
                          <P>
                            {item.job_area}, {item.job_city}
                          </P>
                          <UL attrUL={{ className: 'rating simple-list' }}>
                            <LI>
                              <i className="fa fa-star font-warning"></i>
                            </LI>
                            <LI>
                              <i className="fa fa-star font-warning"></i>
                            </LI>
                            <LI>
                              <i className="fa fa-star font-warning"></i>
                            </LI>
                            <LI>
                              <i className="fa fa-star font-warning"></i>
                            </LI>
                            <LI>
                              <i className="fa fa-star font-warning"></i>
                            </LI>
                          </UL>
                        </Media>
                      </Media>
                      <P>{item.Job_description}</P>
                    </CardBody>
                  </div>
                </Card>
              </Col>
            ))}
        </Row>
      </Col>
    </Fragment>
  );
};

export default CardsClass;