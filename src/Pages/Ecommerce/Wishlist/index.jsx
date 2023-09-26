import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import WishListContain from '../../../Component/Ecommerce/Wishlist';

const WishList = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ecommerce" title="WishList" />
      <WishListContain />
    </Fragment>
  );
};
export default WishList;