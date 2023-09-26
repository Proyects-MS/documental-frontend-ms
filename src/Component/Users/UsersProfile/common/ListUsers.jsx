import React, { Fragment } from 'react';
import { CardBody, Media } from 'reactstrap';
import { Image } from '../../../../AbstractElements';
import { FollowersData } from '../../../../Data/users/index';

const ListUsers = () => {
  return (
    <Fragment>
      <CardBody className="social-list filter-cards-view">
        {
          FollowersData.map((item) =>
            <Media key={item.id}>
              <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${(item.img)}` }} />
              <Media body><span className="d-block">{item.name}</span><a href="#javascript">Add Friend</a></Media>
            </Media>
          )
        }
      </CardBody>
    </Fragment>
  );
};

export default ListUsers;