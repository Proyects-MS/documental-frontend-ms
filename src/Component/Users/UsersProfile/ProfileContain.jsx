import React, { Fragment } from 'react';
import { Card, Col, Row } from 'reactstrap';
import { Image } from '../../../AbstractElements';
import PostHeader from './common/PostHeader';
import PostReact from './common/PostReact';
import SocialIcon from './common/SocialIcons';
import ProfileContain2 from './ProfileContain2';
import ProfileContain3 from './ProfileContain3';

const ProfileContain = () => {
  const desp = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  return (
    <Fragment>
      <Col xl="8" lg="12" md="7" className="xl-65">
        <Row className="row">
          <Col sm="12">
            <Card>
              <div className="profile-post">
                <PostHeader h6={'22 Hours ago'} />
                <div className="post-body">
                  <div className="img-container">
                    <div className="my-gallery" id="aniimated-thumbnials" itemScope="">
                      <Col itemProp="associatedMedia" itemScope="">
                        <a href="#javascript" itemProp="contentUrl" datasize="1600x950">
                          <Image attrImage={{ className: 'img-fluid rounded', src: `${require('../../../assets/images/user-profile/post1.jpg')}`, itemProp: 'thumbnail', alt: 'gallery' }} />
                        </a>
                      </Col>
                    </div>
                  </div>
                  <br />
                  <PostReact h6={'+5 people react this post'} />
                  <SocialIcon />
                </div>
              </div>
            </Card>
          </Col>
          <ProfileContain2 desp={desp} />
          <ProfileContain3 desp={desp} />
        </Row>
      </Col >
    </Fragment >
  );
};
export default ProfileContain;