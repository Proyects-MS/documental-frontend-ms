import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import GeneralContain from '../../../Component/Widgets/General';

const General = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Widgets" title="General" />
      <GeneralContain />
    </Fragment>
  );
};
export default General;