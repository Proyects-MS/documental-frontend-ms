import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import FormTypeaheadContain from '../../../Component/Forms/Form Widgets/Form Typeahead';

const FormTypeahead = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Form Widgets" title="Typeahead" />
      <FormTypeaheadContain />
    </Fragment>
  );
};
export default FormTypeahead;