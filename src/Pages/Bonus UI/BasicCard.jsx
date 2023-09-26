import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import BasicCardContain from '../../Component/Bonus UI/Cards/BasicCards/index';

const BasicCard = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Basic Card" />
      <BasicCardContain />
    </Fragment>
  );
};

export default BasicCard;