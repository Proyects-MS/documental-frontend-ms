import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import DraggableContain from '../../../Component/Calender/Draggable Calender';

const Draggable = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Calender" title="Draggable Calender" />
      <DraggableContain />
    </Fragment>
  );
};
export default Draggable;