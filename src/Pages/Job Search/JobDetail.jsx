import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import JobDetailsContain from '../../Component/JobSearch/JobDetail';

const JobDetails = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Job Search" title=" Job Details" />
      <JobDetailsContain />
    </Fragment>
  );
};
export default JobDetails;