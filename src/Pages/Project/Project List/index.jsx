import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import ProjectListContain from '../../../Component/Project/Project List';

const ProjectList = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Project" title="Project List" />
      <ProjectListContain />
    </Fragment>
  );
};
export default ProjectList;