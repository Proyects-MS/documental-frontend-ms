import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import StickyContain from '../../Component/Bonus UI/Sticky';

const Sticky = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Sticky" />
      <StickyContain />
    </Fragment>
  );
};

export default Sticky;