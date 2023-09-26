import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import BorderTableContain from '../../../Component/Tables/Reactstrap/BorderTable';

const BorderTable = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Tables" title="Border Table" />
      <BorderTableContain />
    </Fragment>
  );
};
export default BorderTable;