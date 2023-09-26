import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import DataTablesContain from '../../Component/Tables/DataTable';

const DataTable = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Tables" title="Data Tables" />
      <DataTablesContain />
    </Fragment>
  );
};
export default DataTable;