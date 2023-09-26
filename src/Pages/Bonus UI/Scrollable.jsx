import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import ScrollableContain from '../../Component/Bonus UI/Scrollable/index';

const Scrollables = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Scrollable" />
      <ScrollableContain />
    </Fragment>
  );
};

export default Scrollables;