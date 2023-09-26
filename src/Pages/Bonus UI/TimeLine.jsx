import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import TimelineContain from '../../Component/Bonus UI/Timeline/timeline';

const TimeLines = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Timeline" />
      <TimelineContain />
    </Fragment>
  );
};

export default TimeLines;