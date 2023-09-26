import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import FormValidationContain from '../../../Component/Forms/Form Control/Form Validation/FormValidation';

const FormValidation = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Form Control" title="Form Validation" />
      <FormValidationContain />
    </Fragment>
  );
};
export default FormValidation;