import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import StylingTableContain from '../../../Component/Tables/Reactstrap/StylingTable';

const StylingTable = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Tables" title="Styling Table" />
      <StylingTableContain />
    </Fragment>
  );
};
export default StylingTable;