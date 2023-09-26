import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import KnowledgeDetailContain from '../../Component/Knowledgebase/Knowledge Details';

const KnowledgeDetails = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="KnowledgeBase" title=" Knowledge Details" />
      <KnowledgeDetailContain />
    </Fragment>
  );
};
export default KnowledgeDetails;