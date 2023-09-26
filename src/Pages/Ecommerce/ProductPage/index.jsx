import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import ProductPageContain from '../../../Component/Ecommerce/ProductPage';

const ProductPage = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ecommerce" title=" Product Page" />
      <ProductPageContain />
    </Fragment>
  );
};
export default ProductPage;