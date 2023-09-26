import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import ChartsContain from '../../../Component/Widgets/ChartsWidgets';

const Charts = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Widgets" title="Charts" />
      <ChartsContain />
    </Fragment>
  );  
};
export default Charts;