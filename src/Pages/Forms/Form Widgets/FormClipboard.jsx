import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import FormClipboardContain from '../../../Component/Forms/Form Widgets/Form Clipboard';

const FromClipboard = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Form Widgets" title="Clipboard" />
      <FormClipboardContain />
    </Fragment>
  );
};
export default FromClipboard;