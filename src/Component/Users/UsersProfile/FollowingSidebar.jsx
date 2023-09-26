import React, { Fragment, useState } from 'react';
import { Card, CardHeader, Col, Collapse } from 'reactstrap';
import { Btn, H5 } from '../../../AbstractElements';
import ListUsers from './common/ListUsers';

const FollowingSidebar = ({ isClass }) => {
  const [isFollowings, setisFollowings] = useState(true);
  const toggleClick = () => {
    setisFollowings(!isFollowings);
  };
  return (
    <Fragment>
      <Col xl="12" lg="6" sm="6" md="12" className={isClass ? 'xl-50 box-col-6' : ''}>
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: 'p-0' }}>
              <Btn attrBtn={{
                className: 'btn btn-link', databstoggle: 'collapse', databstarget: '#collapseicon4'
                , ariaexpanded: 'true', ariacontrols: 'collapseicon4', color: 'transperant', onClick: toggleClick
              }} >Following</Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={isFollowings}>
            <ListUsers />
          </Collapse>
        </Card>
      </Col>
    </Fragment>
  );
};
export default FollowingSidebar;