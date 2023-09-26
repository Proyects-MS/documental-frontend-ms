import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import ThemifyIconsContain from '../../Component/Icons/ThemifyIcon';

const ThemifyIcon = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Icons" title="ThemifyIcon" />
      <ThemifyIconsContain />
    </Fragment>
  );
};
export default ThemifyIcon;
