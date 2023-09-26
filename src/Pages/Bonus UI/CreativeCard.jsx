import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import CreativeCardContain from '../../Component/Bonus UI/Cards/CreativeCards/index';

const CreativeCard = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Creative Card" />
      <CreativeCardContain />
    </Fragment>
  );
};

export default CreativeCard;