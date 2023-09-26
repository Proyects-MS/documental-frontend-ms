import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import EditMyProfile from './EditmyProfile';
import MyProfileEdit from './MyProfile';

const UsersEditContain = ({data, toggleEditSignature, toggleEditAvatar}) => {
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="edit-profile">
          <Row>
            <Col xl="12">
              <EditMyProfile data={data} toggleEditSignature={toggleEditSignature} toggleEditAvatar={toggleEditAvatar}/>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default UsersEditContain;