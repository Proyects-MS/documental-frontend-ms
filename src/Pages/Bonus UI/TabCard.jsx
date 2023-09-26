import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import TabCardContain from '../../Component/Bonus UI/Cards/TabCard';

const TabCard = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Tab Card" />
      <TabCardContain />
    </Fragment>
  );
};

export default TabCard;