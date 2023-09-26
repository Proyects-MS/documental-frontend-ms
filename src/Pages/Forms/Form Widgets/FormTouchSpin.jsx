import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import FormTouchspinContain from '../../../Component/Forms/Form Widgets/Form Touchspin';

const FormTouchspin = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Form Widgets" title="Touchspin" />
      <FormTouchspinContain />
    </Fragment>
  );
};
export default FormTouchspin;