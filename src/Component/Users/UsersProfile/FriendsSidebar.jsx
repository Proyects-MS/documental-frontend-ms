import { Btn, H5, Image } from '../../../AbstractElements';
import { FriendsData } from '../../../Data/users/index';
import React, { Fragment, useState } from 'react';
import { Card, CardHeader, Col, Collapse } from 'reactstrap';

const FriendsSidebar = ({ isClass }) => {
  const [friends, setisFriends] = useState(true);
  const toggleClick = () => {
    setisFriends(!friends);
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
              }} >Friends</Btn>
            </H5>
          </CardHeader>
          <Collapse className="card-body avatar-showcase filter-cards-view" isOpen={friends}>
            {
              FriendsData.map((item) =>
                <div className="d-inline-block friend-pic" key={item.id}>
                  <Image attrImage={{ className: 'img-50 rounded-circle', src: `${(item.img)}`, alt: '#' }} />
                </div>
              )
            }
          </Collapse>
        </Card>
      </Col>
    </Fragment>
  );
};
export default FriendsSidebar;