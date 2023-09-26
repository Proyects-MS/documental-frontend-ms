import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import DateTimeContain from '../../../Component/Forms/Form Widgets/Date and Time';

const FormDateTime = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Form Widgets" title="DateTime" />
      <DateTimeContain />
    </Fragment>
  );
};
export default FormDateTime;