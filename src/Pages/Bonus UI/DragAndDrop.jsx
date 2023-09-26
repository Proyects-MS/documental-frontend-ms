import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import DragAndDropContain from '../../Component/Bonus UI/DragAndDrop';

const DragAndDrop = () => {
  return (
    <Fragment>
        <Breadcrumbs parent="Bonus UI" title="Drag and Drop" />
      <DragAndDropContain />
    </Fragment>
  );
};

export default DragAndDrop;