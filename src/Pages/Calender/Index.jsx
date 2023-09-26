import React, { Fragment } from 'react';
import CalenderContain from '../../Component/Calender/Index';
import { Breadcrumbs } from '../../AbstractElements';

const Calender = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Calender" title="Calender" />
      <CalenderContain />
    </Fragment>
  );
};
export default Calender;