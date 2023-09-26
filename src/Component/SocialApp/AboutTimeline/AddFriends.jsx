import { AddFriend } from '../../../Constant';
import { Btn, LI, UL, Image } from '../../../AbstractElements';
import { FriendsData } from '../../../Data/SocialApp';
import { CardBody, } from 'reactstrap';
import React, { Fragment } from 'react';

const AddFriends = () => {
  return (
    <Fragment>
      <CardBody className="pt-0">
        <div className="avatar-showcase">
          <div className="pepole-knows">
            <UL attrUL={{ className: 'simple-list d-flex flex-row' }}>
              {FriendsData.map((item) =>
                <LI key={item.id}>
                  <div className="add-friend text-center">
                    <Image attrImage={{ className: 'img-60 img-fluid rounded-circle', alt: 'twoImg', src: item.img }} /><span className="d-block f-w-600">{item.title}</span>
                    <Btn attrBtn={{ color: 'primary', size: 'xs' }}>{AddFriend}</Btn>
                  </div>
                </LI>
              )}
            </UL>
          </div>
        </div>
      </CardBody>
    </Fragment>
  );
};
export default AddFriends;