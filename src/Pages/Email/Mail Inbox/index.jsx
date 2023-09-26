import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import MailInboxContain from '../../../Component/Email/Mail Inbox';

const MailInbox = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Email" title="Mail Inbox" />
      <MailInboxContain />
    </Fragment>
  );
};
export default MailInbox;