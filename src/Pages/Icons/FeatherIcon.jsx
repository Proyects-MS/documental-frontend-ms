import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import FeatherIconContain from '../../Component/Icons/FeatherIcon';

const FeatherIcon = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Icons" title="Feather Icon" />
      <FeatherIconContain />
    </Fragment>
  );
};
export default FeatherIcon;
