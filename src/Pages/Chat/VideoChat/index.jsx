import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import VideoChatContain from '../../../Component/Chat/VideoChat';

const VideoChat = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Chat" title=" Video Chat" />
      <VideoChatContain />
    </Fragment>
  );
};
export default VideoChat;