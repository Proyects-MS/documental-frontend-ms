import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import PaginationsContain from '../../Component/Bonus UI/Pagination';

const Pagination = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Pagination" />
      <PaginationsContain />
    </Fragment>
  );
};

export default Pagination;