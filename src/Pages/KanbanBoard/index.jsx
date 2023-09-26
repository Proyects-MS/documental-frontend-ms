import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import KanbanBoardContain from '../../Component/KanbanBoard';

const KanbanBoard = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="KanbanBoard" title=" KanbanBoard" />
      <KanbanBoardContain />
    </Fragment>
  );
};
export default KanbanBoard;