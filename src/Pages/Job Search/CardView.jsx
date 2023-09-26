import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import JobCardsContain from '../../Component/JobSearch/JobCardView';

const CardView = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Job Search" title=" Card View" />
      <JobCardsContain />
    </Fragment>
  );
};
export default CardView;