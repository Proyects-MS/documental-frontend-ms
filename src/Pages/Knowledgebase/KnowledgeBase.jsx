import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import KnowledgeBaseContain from '../../Component/Knowledgebase/Knowledgebase';

const KnowledgeBase = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="KnowledgeBase" title=" Knowledge Base" />
      <KnowledgeBaseContain />
    </Fragment>
  );
};
export default KnowledgeBase;