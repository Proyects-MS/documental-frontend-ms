import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import DefaultContain from '../../../Component/DashBoard/Default/index';

const Default = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Dashboards" title="Default" />
      <DefaultContain />
    </Fragment>
  );
};
export default Default;