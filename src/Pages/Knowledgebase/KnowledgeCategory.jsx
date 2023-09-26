import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import KnowledgeCategoryContain from '../../Component/Knowledgebase/Knowledge Category';

const KnowledgeCategory = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="KnowledgeBase" title=" Knowledge Category" />
      <KnowledgeCategoryContain />
    </Fragment>
  );
};
export default KnowledgeCategory;