import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import EditMyProfile from './EditMyProfile';
import MyProfileEdit from './MyProfile';

const ProfileUser = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="edit-profile">
          <Row>
            <Col xl="4">
              <MyProfileEdit />
            </Col>
            <Col xl="8">
              <EditMyProfile />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default ProfileUser;