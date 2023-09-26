import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import WeatherIconsContain from '../../Component/Icons/WeatherIcon';

const WhetherIcon = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Icons" title="WhetherIcon" />
      <WeatherIconsContain />
    </Fragment>
  );
};
export default WhetherIcon;
