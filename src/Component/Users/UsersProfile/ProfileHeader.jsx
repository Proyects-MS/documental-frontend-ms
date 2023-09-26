import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'reactstrap';
import { H4, H6, LI, UL, Image } from '../../../AbstractElements';
import Img from '../../../assets/images/user-profile/bg-profile.jpg';

const ProfileHeader = () => {
  return (
    <Fragment>
      <Col sm="12">
        <Card className="profile-header bg-image" style={{ backgroundImage: `url(${Img})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}>
          <div className="profile-img-wrrap">
            <Image style={{ backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }} attrImage={{ className: 'img-fluid bg-img-cover', src: `${require('../../../assets/images/user-profile/bg-profile.jpg')}`, alt: '' }} /></div>
          <div className="userpro-box">
            <div className="img-wrraper">
              <div className="avatar"><Image attrImage={{ className: 'img-fluid', alt: '', src: `${require('../../../assets/images/user/7.jpg')}` }} /></div>
              <Link className="icon-wrapper" to={`${process.env.PUBLIC_URL}/users/useredit`}>
                <i className="icofont icofont-pencil-alt-5"></i>
              </Link>
            </div>
            <div className="user-designation">
              <div className="title"><a target="_blank" href="#javascript">
                <H4>Emay Walter</H4>
                <H6>designer</H6></a></div>
              <div className="social-media">
                <UL attrUL={{ className: 'simple-list user-list-social flex-row' }}>
                  <LI><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></LI>
                  <LI><a href="https://www.google.com/"><i className="fa fa-google-plus"></i></a></LI>
                  <LI><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></LI>
                  <LI><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></LI>
                  <LI><a href="https://dashboard.rss.com/auth/sign-in/"><i className="fa fa-rss"></i></a></LI>
                </UL>
              </div>
              <div className="follow">
                <UL attrUL={{ className: 'simple-list follow-list flex-row' }}>
                  <LI>
                    <div className="follow-num counter">325</div><span>Follower</span>
                  </LI>
                  <LI>
                    <div className="follow-num counter">450</div><span>Following</span>
                  </LI>
                  <LI>
                    <div className="follow-num counter">500</div><span>Likes</span>
                  </LI>
                </UL>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};
export default ProfileHeader;