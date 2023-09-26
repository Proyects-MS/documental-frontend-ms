import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import MdeEDitorContain from '../../Component/Editor/MDE Editor/MDEEditor';

const MDEEditor = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Editor" title=" MDE Editor" />
      <MdeEDitorContain />
    </Fragment>
  );
};
export default MDEEditor;