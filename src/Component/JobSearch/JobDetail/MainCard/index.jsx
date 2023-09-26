import React, { Fragment } from 'react';
import { Card, Col, CardBody, Row, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { H6, P, UL, LI, Btn, Image } from '../../../../AbstractElements';
import JobDescription from './JobDescription';
import MainDataCard from './MainCards';

const MainCard = () => {
  return (
    <Fragment>
      <Col xl="9" className="box-col-7 xl-60">
        <Card>
          <div className="job-search">
            <CardBody>
              <Media>
                <Image attrImage={{ className: 'img-40 img-fluid m-r-20', src: `${require('../../../../assets/images/job-search/1.jpg')}`, alt: '' }} />
                <Media body>
                  <H6 attrH6={{ className: 'f-w-600' }} ><a href="#javascript">Product Designer (UI/UX Designer)</a></H6>
                  <P>Endless - United States</P>
                  <UL attrUL={{ className: 'rating simple-list' }} >
                    <LI><i className="fa fa-star font-warning"></i></LI>
                    <LI><i className="fa fa-star font-warning"></i></LI>
                    <LI><i className="fa fa-star font-warning"></i></LI>
                    <LI><i className="fa fa-star font-warning"></i></LI>
                    <LI><i className="fa fa-star font-warning"></i></LI>
                  </UL>
                  <Link to={`${process.env.PUBLIC_URL}/jobSearch/job-apply`}>
                    <Btn attrBtn={{ className: 'btn btn-sm job-apply-btn', color: 'primary' }}>Apply for this job</Btn>
                  </Link>
                </Media>
              </Media>
              <JobDescription />
            </CardBody>
          </div>
        </Card>
        <div className="header-faq">
          <H6 attrH6={{ className: 'mb-0 f-w-600' }}>Similar jobs</H6>
        </div>
        <Row>
          <MainDataCard />
        </Row>
      </Col >
    </Fragment >
  );
};

export default MainCard;