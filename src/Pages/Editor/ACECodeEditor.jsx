import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import ACEEditorContain from '../../Component/Editor/Ace code editor/ACECodeEditor';

const ACEEditor = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Editor" title=" ACE Editor" />
      <ACEEditorContain />
    </Fragment>
  );
};
export default ACEEditor;