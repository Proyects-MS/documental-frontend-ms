import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import FAQContent from '../../Component/FAQ';

const FAQ = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="FAQ" title="FAQ" />
      <FAQContent />
    </Fragment>
  );
};
export default FAQ;