import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import UsersProfileContain from '../../../Component/Users/UsersProfile';

const UsersProfile = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Users" title="Users Profile" />
      <UsersProfileContain />
    </Fragment>
  );
};
export default UsersProfile;