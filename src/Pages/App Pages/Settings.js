import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Breadcrumbs } from '../../AbstractElements';
import SettingsAccordian from '../Ui-kit/Accordian/SettingsAccordian';


const Settings = () => {

  const { permissions } = useSelector((data) => data.authUser);

  return (
    <Fragment>
      <Breadcrumbs parent="Herramientas" title="Ajustes" />
      <SettingsAccordian/>
    </Fragment>
  );
};
export default Settings;