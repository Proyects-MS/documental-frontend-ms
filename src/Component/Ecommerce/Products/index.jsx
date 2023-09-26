import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import ProductFeatures from './ProductFeatures';
import ProductGrid from './ProductGrid';

const ProductContain = () => {
  return (
    <Fragment>
      <Container fluid={true} className="product-wrapper">
        <div className="product-grid">
          <ProductFeatures />
          <ProductGrid />
        </div>
      </Container>
    </Fragment>
  );
};
export default ProductContain;