import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import DropzonesContain from '../../Component/Bonus UI/Dropzones';

const DropzoneClass = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Dropzone" />
      <DropzonesContain />
    </Fragment>
  );
};

export default DropzoneClass;