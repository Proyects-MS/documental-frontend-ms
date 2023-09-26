import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import FlagIconContain from '../../Component/Icons/FlagIcon';

const FlagIcon = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Icons" title="Flag Icon" />
      <FlagIconContain />
    </Fragment>
  );
};
export default FlagIcon;
