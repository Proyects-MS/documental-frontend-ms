import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import FormDatapickerContain from '../../../Component/Forms/Form Widgets/Form DataPicker';

const FormDatapicker = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Form Widgets" title="Datepicker" />
      <FormDatapickerContain />
    </Fragment>
  );
};
export default FormDatapicker;