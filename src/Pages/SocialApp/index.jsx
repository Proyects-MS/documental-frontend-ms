import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import SocialAppContain from '../../Component/SocialApp';

const SocialApp = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="SocialApp" title="Social App" />
      <SocialAppContain />
    </Fragment>
  );
};
export default SocialApp;