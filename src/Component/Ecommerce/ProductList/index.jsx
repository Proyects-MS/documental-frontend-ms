import { H5 } from '../../../AbstractElements';
import { ProductListDesc, ProductListTitle } from '../../../Constant';
import ProductTableData from './ProductTableData';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const ProductListContain = () => {
  return (
    <Fragment>
      <Container fluid={true} className='list-products'>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className='pb-0'>
                <H5>{ProductListTitle} </H5><span>{ProductListDesc}</span>
              </CardHeader>
              <CardBody>
                <ProductTableData />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default ProductListContain;