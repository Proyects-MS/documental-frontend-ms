import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import ApexchartsContain from '../../Component/Charts/apexCharts';

const ApexChart = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Chart" title="Apex Chart" />
      <ApexchartsContain />
    </Fragment>
  );
};
export default ApexChart;