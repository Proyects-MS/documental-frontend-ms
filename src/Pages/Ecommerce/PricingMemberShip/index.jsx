import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import PricingMembershipContain from '../../../Component/Ecommerce/PricingMemberShip';

const PricingMembership = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ecommerce" title="Pricing" />
      <PricingMembershipContain />
    </Fragment>
  );
};
export default PricingMembership;