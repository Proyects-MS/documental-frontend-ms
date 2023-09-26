import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import ContactFirebaseContain from '../../Component/Contact/ContactFirebase';

const ContactFirebase = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Contact" title="Contact Firebase" />
      <ContactFirebaseContain />
    </Fragment>
  );
};
export default ContactFirebase;