import React, { Fragment } from 'react';
import { MoreHorizontal } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Media, Table } from 'reactstrap';
import { H5, LI, UL } from '../../../AbstractElements';
import { cartProducts } from '../../../Data/Widgets/index';
import { Details, Done, InProgress, Pending, Price, ProductsCart, Quantity, Rejected, Status } from '../../../Constant';

const ProductCart = () => {
  return (
    <Fragment>
      <Col xl="6" className='xl-50 box-col-6'>
        <Card className='user-status'>
          <CardHeader className="pb-0">
            <Media >
              <Media body>
                <H5>{ProductsCart}</H5>
              </Media>
              <div className="icon-box onhover-dropdown"><MoreHorizontal />
                <div className="icon-box-show onhover-show-div">
                  <UL>
                    <LI><a href='#javascript'>{Done}</a></LI>
                    <LI><a href='#javascript'>{Pending}</a></LI>
                    <LI><a href='#javascript'> {Rejected}</a></LI>
                    <LI><a href='#javascript'>{InProgress} </a></LI>
                  </UL>
                </div>
              </div>
            </Media>
          </CardHeader>
          <CardBody>
            <div className="mb-0 table-responsive">
              <Table borderless>
                <thead>
                  <tr>
                    <th scope="col">{Details}</th>
                    <th scope="col">{Quantity}</th>
                    <th scope="col">{Price}</th>
                    <th scope="col" className="text-end">{Status}</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map(data => (
                    <tr key={data.id}>
                      <td>{data.details}</td>
                      <td>{data.qty}</td>
                      <td className={`font-${data.statusColor}`}>{data.price}</td>
                      <td className="text-end">
                        <span className={`badge ${data.className}`}>{data.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default ProductCart;