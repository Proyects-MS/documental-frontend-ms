import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import Followers from './Followers';
import AboutMe from './AboutMe';
import Followings from './Followings';
import LatestPhotos from './LatestPhoto';
import Friends from './Friends';

const LeftbarProfile = () => {
    return (
      <Fragment>
        <Col xl="3" lg='12' md="5" className="xl-30">
          <div className="default-according style-1 faq-accordion job-accordion">
            <Row>
              <AboutMe />
              <Followers />
              <Followings />
              <LatestPhotos />
              <Friends />
            </Row>
          </div>
        </Col>
      </Fragment>
    );
};

export default LeftbarProfile;