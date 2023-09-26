import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import CryptoContain from '../../../Component/DashBoard/Crypto';

const Crypto = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Dashboards" title="Crypto" />
      <CryptoContain />
    </Fragment>
  );
};
export default Crypto;