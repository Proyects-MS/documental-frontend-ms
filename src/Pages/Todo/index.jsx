import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import TodoContain from '../../Component/Todo';

const Todo = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Todo" title="Todo" />
      <TodoContain />
    </Fragment>
  );
};
export default Todo;