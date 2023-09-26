import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import ProductContain from '../../../Component/Ecommerce/Products';

const Products = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ecommerce" title=" Product" />
      <ProductContain />
    </Fragment>
  );
};
export default Products;