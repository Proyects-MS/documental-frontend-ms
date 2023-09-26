import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import ChartJsContain from '../../Component/Charts/chartsjs';

const ChartJs = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Chart" title="Chart Js" />
      <ChartJsContain />
    </Fragment>
  );
};
export default ChartJs;