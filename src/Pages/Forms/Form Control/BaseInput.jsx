import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import BaseInputContain from '../../../Component/Forms/Form Control/BaseInput';

const BaseInput = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Form Control" title="BaseInput" />
      <BaseInputContain />
    </Fragment>
  );
};
export default BaseInput;