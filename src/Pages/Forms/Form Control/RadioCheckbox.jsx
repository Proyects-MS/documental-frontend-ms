import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import RadioCheckboxContain from '../../../Component/Forms/Form Control/Radio Checkbox';

const RadioCheckbox = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Form Control" title="Radio Checkbox " />
      <RadioCheckboxContain />
    </Fragment>
  );
};
export default RadioCheckbox;