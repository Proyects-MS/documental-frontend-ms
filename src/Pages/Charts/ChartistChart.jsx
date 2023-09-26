import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import ChartistContain from '../../Component/Charts/chartistCharts';

const ChartistChart = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Chart" title="Chartist Chart" />
      <ChartistContain />
    </Fragment>
  );
};
export default ChartistChart;