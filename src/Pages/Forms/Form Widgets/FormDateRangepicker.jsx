import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import FormDateRangepickerContain from '../../../Component/Forms/Form Widgets/Form Date Rangepicker';

const FormDateRangepicker = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Form Widgets" title="Date Rangepicker" />
      <FormDateRangepickerContain />
    </Fragment>
  );
};
export default FormDateRangepicker;