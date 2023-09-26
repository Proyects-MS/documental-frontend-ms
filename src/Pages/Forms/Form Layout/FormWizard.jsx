import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import FormWizardContain from '../../../Component/Forms/Form Layout/Form Wizard';

const FormWizard = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Form Layout" title="Form Wizard" />
      <FormWizardContain />
    </Fragment>
  );
};
export default FormWizard;