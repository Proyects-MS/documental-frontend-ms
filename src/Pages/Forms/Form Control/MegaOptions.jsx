import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import MegaOptionsContain from '../../../Component/Forms/Form Control/Mega Option';

const MegaOptions = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Form Control" title="Mega Option " />
      <MegaOptionsContain />
    </Fragment>
  );
};
export default MegaOptions;