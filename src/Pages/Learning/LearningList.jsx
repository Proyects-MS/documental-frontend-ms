import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import LearningListContain from '../../Component/Learning/LearningList';

const LearningList = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Learning List" parent="Learning" title="Learning List" />
      <LearningListContain />
    </Fragment>
  );
};
export default LearningList;