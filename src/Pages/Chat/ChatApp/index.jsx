import React, { Fragment } from 'react';
import ChatAppContain from '../../../Component/Chat/ChatApp';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';

const ChatApp = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Chat" title=" Chat App" />
      <ChatAppContain />
    </Fragment>
  );
};
export default ChatApp;