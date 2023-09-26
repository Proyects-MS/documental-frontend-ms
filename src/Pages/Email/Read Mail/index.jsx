import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import ReadMailContain from '../../../Component/Email/Read Mail';

const ReadMail = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Email" title="Read Mail" />
      <ReadMailContain />
    </Fragment>
  );
};
export default ReadMail;