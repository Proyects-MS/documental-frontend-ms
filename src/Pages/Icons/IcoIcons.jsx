import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import IcoIconsContain from '../../Component/Icons/IcoIcon';

const IcoIcons = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Icons" title="Ico Icons" />
      <IcoIconsContain />
    </Fragment>
  );
};
export default IcoIcons;
