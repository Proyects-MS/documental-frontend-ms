import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import FontawesomeIconContain from '../../Component/Icons/FontawesomeIcon';

const FontAwesome = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Icons" title="Font Awesome" />
      <FontawesomeIconContain />
    </Fragment>
  );
};
export default FontAwesome;
