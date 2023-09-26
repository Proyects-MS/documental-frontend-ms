import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import SweetAlertsContain from '../../Component/Bonus UI/SweetAlert';

const SweetAlerts = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Sweet Alert" />
      <SweetAlertsContain />
    </Fragment>
  );
};

export default SweetAlerts;