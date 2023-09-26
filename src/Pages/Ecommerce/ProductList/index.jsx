import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import ProductListContain from '../../../Component/Ecommerce/ProductList';

const ProductList = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ecommerce" title=" Product List" />
      <ProductListContain />
    </Fragment>
  );
};
export default ProductList;