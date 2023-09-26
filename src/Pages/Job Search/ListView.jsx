import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import ListViewContain from '../../Component/JobSearch/ListView';

const ListView = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Job Search" title="List View" />
      <ListViewContain />
    </Fragment>
  );
};
export default ListView;