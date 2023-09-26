import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import ContactContain from '../../Component/Contact/ContactApp';

const Contact = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Contact" title="Contact" />
      <ContactContain />
    </Fragment>
  );
};
export default Contact;