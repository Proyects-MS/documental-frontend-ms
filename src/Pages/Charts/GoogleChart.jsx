import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import GoogleChartsContain from '../../Component/Charts/googleCharts';

const GoogleChart = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Chart" title="Google Chart" />
      <GoogleChartsContain />
    </Fragment>
  );
};
export default GoogleChart;