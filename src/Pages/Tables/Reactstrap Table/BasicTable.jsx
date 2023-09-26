import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import BasicTablesContain from '../../../Component/Tables/Reactstrap/BasicTable';

const BasicTable = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Tables" title="Basic Table" />
      <BasicTablesContain />
    </Fragment>
  );
};
export default BasicTable;