import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import UsersEditContain from '../../../Component/Users/UsersEdit';

const UsersEdit = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Users" title="Users Edit" />
      <UsersEditContain />
    </Fragment>
  );
};
export default UsersEdit;