import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import CreateListContain from '../../../Component/Project/Create List';

const CreateList = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Project" title="Create List" />
      <CreateListContain />
    </Fragment>
  );
};
export default CreateList;