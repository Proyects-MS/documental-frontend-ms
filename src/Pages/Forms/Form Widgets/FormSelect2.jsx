import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import FormSelectContain from '../../../Component/Forms/Form Widgets/Form Select2';

const FormSelect2 = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Form Widgets" title="Select2" />
      <FormSelectContain />
    </Fragment>
  );
};
export default FormSelect2;