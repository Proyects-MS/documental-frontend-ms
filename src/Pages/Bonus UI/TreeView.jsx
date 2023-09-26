import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import TreeViewContain from '../../Component/Bonus UI/TreeView';

const TreeViews = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus UI" title="Tree View" />
      <TreeViewContain />
    </Fragment>
  );
};

export default TreeViews;