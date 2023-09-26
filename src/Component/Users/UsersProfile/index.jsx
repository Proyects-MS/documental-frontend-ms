import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import AboutMeSidebar from './AboutMeSidebar';
import FollowerSidebar from './FollowerSidebar';
import FollowingSidebar from './FollowingSidebar';
import FriendsSidebar from './FriendsSidebar';
import PhotoSidebar from './PhotoSidebar';
import ProfileContain from './ProfileContain';
import ProfileHeader from './ProfileHeader';

const UsersProfileContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="user-profile">
          <Row>
            <ProfileHeader />
            <Col xl="4" md="5" lg="12" className="xl-35">
              <div className="default-according style-1 faq-accordion job-accordion">
                <Row>
                  <AboutMeSidebar />
                  <FollowerSidebar />
                  <FollowingSidebar />
                  <PhotoSidebar />
                  <FriendsSidebar />
                </Row>
              </div>
            </Col>
            <ProfileContain />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default UsersProfileContain;