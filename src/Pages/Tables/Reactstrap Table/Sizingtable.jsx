import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import SizingTableContain from '../../../Component/Tables/Reactstrap/SizingTable';

const SizingTable = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Tables" title="Sizing Table" />
      <SizingTableContain />
    </Fragment>
  );
};
export default SizingTable;