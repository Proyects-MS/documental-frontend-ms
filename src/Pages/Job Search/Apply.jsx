import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import ApplyContain from '../../Component/JobSearch/Apply';

const ApplyNow = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Job Search" title="Apply" />
      <ApplyContain />
    </Fragment>
  );
};
export default ApplyNow;