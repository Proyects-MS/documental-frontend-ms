import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import CkEditorContain from '../../Component/Editor/CkEditor';

const CKEditor = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Editor" title="CK Editor" />
      <CkEditorContain />
    </Fragment>
  );
};
export default CKEditor;