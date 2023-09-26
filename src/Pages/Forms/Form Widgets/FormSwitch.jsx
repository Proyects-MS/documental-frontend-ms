import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import FormSwitchContain from '../../../Component/Forms/Form Widgets/Form Switch';

const FormSwitch = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Form Widgets" title="Switch" />
      <FormSwitchContain />
    </Fragment>
  );
};
export default FormSwitch;