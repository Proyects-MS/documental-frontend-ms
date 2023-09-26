import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import LeafletMapContain from '../../Component/Maps/Leaflet map';

const LeafletMap = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Map" title="Leaflet Map" />
      <LeafletMapContain />
    </Fragment>
  );
};
export default LeafletMap;