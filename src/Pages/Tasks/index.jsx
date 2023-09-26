import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import TaskContain from '../../Component/Task';

const Tasks = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Tasks" title="Tasks" />
      <TaskContain />
    </Fragment>
  );
};
export default Tasks;