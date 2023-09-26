import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import ComposeContain from '../../../Component/Email/Compose';

const Compose = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Email" title="Compose" />
      <ComposeContain />
    </Fragment>
  );
};
export default Compose;