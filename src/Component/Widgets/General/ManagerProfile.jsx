import React, { Fragment } from 'react';
import CountUp from 'react-countup';
import { Card, CardFooter, Col, Row } from 'reactstrap';
import { H5, H4, H6, LI, UL, Image } from '../../../AbstractElements';
import usercard from '../../../assets/images/other-images/user-profile.png';
import SVG1 from '../../../assets/images/svg-icon/1.svg';
import SVG2 from '../../../assets/images/svg-icon/2.svg';
import SVG3 from '../../../assets/images/svg-icon/3.svg';
import SVG4 from '../../../assets/images/svg-icon/4.svg';
import SVG5 from '../../../assets/images/svg-icon/5.svg';
import { Follower, Following, JohnCarter, Manager, TotalPost } from '../../../Constant';

const ManagerProfile = () => {
  return (
    <Fragment>
      <Col xl="4" md="6" className="box-col-6 lg-50 dash-lg-50">
        <Card className="custom-profile">
          <div className="pb-0">
            <div className="card-profile"><Image attrImage={{ className: 'user-img', src: `${usercard}`, alt: '' }} />
            </div>
            <div className="text-center profile-details">
              <H4>{JohnCarter}</H4>
              <H6>{Manager}</H6>
            </div>
            <UL attrUL={{ className: 'simple-list card-social flex-row' }}>
              <LI><a className="social-link" href="https://www.google.com/"><Image attrImage={{ className: 'user-img', src: `${SVG1}`, alt: '' }} /></a></LI>
              <LI><a className="social-link" href="https://www.facebook.com/"><Image attrImage={{ className: 'user-img', src: `${SVG2}`, alt: '' }} /></a></LI>
              <LI><a className="social-link" href="https://twitter.com/"><Image attrImage={{ className: 'user-img', src: `${SVG3}`, alt: '' }} /></a></LI>
              <LI><a className="social-link" href="https://www.instagram.com/"><Image attrImage={{ className: 'user-img', src: `${SVG4}`, alt: '' }} /></a></LI>
              <LI><a className="social-link" href="https://dashboard.rss.com/auth/sign-in/"><Image attrImage={{ className: 'user-img', src: `${SVG5}`, alt: '' }} /></a></LI>
            </UL>
          </div>
          <CardFooter>
            <Row>
              <Col sm="4 col-4" >
                <H6>{Follower}</H6>
                <H5>
                  <CountUp className="counter" end={9564} /></H5>
              </Col>
              <Col sm="4 col-4">
                <H6>{Following}</H6>
                <H5><CountUp className="counter" end={49} />K</H5>
              </Col>
              <Col sm="4 col-4">
                <H6>{TotalPost}</H6>
                <H5><CountUp end={96} className="counter" />M</H5>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </Col>
    </Fragment>
  );
};
export default ManagerProfile;