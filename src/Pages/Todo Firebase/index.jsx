import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import TodoFirebaseContain from '../../Component/Todo Firebase';

const TodoFirebase = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Todo Firebase" title="Todo Firebase" />
      <TodoFirebaseContain />
    </Fragment>
  );
};
export default TodoFirebase;