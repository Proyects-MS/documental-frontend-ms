import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import UsersCardssContain from '../../../Component/Users/UsersCards';

const UsersCardss = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Users" title="Users Card" />
      <UsersCardssContain />
    </Fragment>
  );
};
export default UsersCardss;