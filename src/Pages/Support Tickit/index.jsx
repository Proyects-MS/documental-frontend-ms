import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import SupportTickitContain from '../../Component/Support Tickit';

const SupportTickit = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Support Ticket" title="Support Ticket" />
      <SupportTickitContain />
    </Fragment>
  );
};
export default SupportTickit;