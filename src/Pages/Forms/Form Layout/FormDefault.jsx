import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import FormDefaultContain from '../../../Component/Forms/Form Layout/Form Default';

const FormDefault = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Form Layout" title="Form Default" />
      <FormDefaultContain />
    </Fragment>
  );
};
export default FormDefault;