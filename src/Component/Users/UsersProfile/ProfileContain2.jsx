import React, { Fragment } from 'react';
import { Card, Col } from 'reactstrap';
import { Image } from '../../../AbstractElements';
import PostHeader from './common/PostHeader';
import PostReact from './common/PostReact';
import SocialIcon from './common/SocialIcons';

const ProfileContain2 = () => {
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <div className="profile-post">
            <PostHeader h6={'5 Hours ago'} />
            <div className="post-body">
              <div className="img-container">
                <div className="row mt-4 pictures my-gallery" id="aniimated-thumbnials-2" itemScope="">
                  <Col sm="6" itemProp="associatedMedia" itemScope=""><a href="#javascript" itemProp="contentUrl" data-size="1600x950">
                    <Image attrImage={{ className: 'img-fluid rounded', src: `${require('../../../assets/images/user-profile/post2.jpg')}`, itemProp: 'thumbnail', alt: 'gallery' }} />
                  </a>
                  </Col>
                  <Col sm="6" itemProp="associatedMedia" itemScope="">
                    <a href="#javascript" itemProp="contentUrl" data-size="1600x950">
                      <Image attrImage={{ className: 'img-fluid rounded', src: `${require('../../../assets/images/user-profile/post3.jpg')}`, itemProp: 'thumbnail', alt: 'gallery' }} />
                    </a>
                  </Col>
                </div>
              </div>
              <br />
              <PostReact h6={'+25 people react this post'} />
              <SocialIcon />
            </div>
          </div>
          <Col sm="12">
          </Col>
        </Card>
      </Col>
    </Fragment>
  );
};
export default ProfileContain2;