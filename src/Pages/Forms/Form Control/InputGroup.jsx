import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import InputGroupsContain from '../../../Component/Forms/Form Control/Input Group';

const InputGroups = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Form Control" title="InputGroup " />
      <InputGroupsContain />
    </Fragment>
  );
};
export default InputGroups;