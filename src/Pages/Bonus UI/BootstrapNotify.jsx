import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import BootstrapNotifyContain from '../../Component/Bonus UI/BootstrapNotify';

const BootstrapNotify = () => {
    return (
      <Fragment>
          <Breadcrumbs parent="Bonus UI" title="Bootstrap Notify" />
        <BootstrapNotifyContain />
      </Fragment>
    );
};

export default BootstrapNotify;