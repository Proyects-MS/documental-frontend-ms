import React, { Fragment, useContext } from 'react';
import { Media } from 'reactstrap';
import { Image } from '../../../AbstractElements';
import ChatAppContext from '../../../_helper/chat-app/index';
import { Link } from 'react-router-dom';

const CurrentUser = () => {
  const { currentUserr } = useContext(ChatAppContext);
  var images = require.context('../../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      {currentUserr && <Media>
        <Image attrImage={{
          src: `${dynamicImage(currentUserr.thumb)}`
          , className: 'rounded-circle user-image'
          , alt: ''
        }} />
        <div className="about">
          <div className="name f-w-600"><Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>{currentUserr.name}</Link></div>
          <div className="status">{currentUserr.status}</div>
        </div>
      </Media>}
    </Fragment>
  );
};

export default CurrentUser;