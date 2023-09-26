import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import ButtonsContain from '../../Component/Buttons';

const DefaultStyle = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Button" title="Default Style" />
      <ButtonsContain />
    </Fragment>
  );
};
export default DefaultStyle;