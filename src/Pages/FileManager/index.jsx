import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import FileManagerContain from '../../Component/FileManager';

const FileManager = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="FileManager" title=" FileManager" />
      <FileManagerContain />
    </Fragment>
  );
};
export default FileManager;