import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import ProductCartConatain from '../../../Component/Ecommerce/ProductCart';

const ProductCart = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ecommerce" title="Cart" />
      <ProductCartConatain />
    </Fragment>
  );
};
export default ProductCart;