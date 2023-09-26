import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import DraggingCardContain from '../../Component/Bonus UI/Cards/DragCards/index';

const DraggingCard = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Dragging Card" />
      <DraggingCardContain />
    </Fragment>
  );
};

export default DraggingCard;