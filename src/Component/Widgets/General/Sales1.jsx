import React, { Fragment } from 'react';
import { MoreHorizontal } from 'react-feather';
import { Row, Col, Card, CardHeader, CardBody, Media } from 'reactstrap';
import { H5, H6, LI, UL } from '../../../AbstractElements';
import { Done, InProgress, NewOrder, Orderdetails, Pending, Rejected } from '../../../Constant';
import { Sales2Data } from '../../../Data/Widgets';

const Sales1 = () => {
  return (
    <Fragment>
      <Col xl='6' className=' xl-100 box-col-12'>
        <Card className="widget-joins">
          <CardHeader className="pb-0">
            <Media>
              <Media body><H5>{Orderdetails}</H5></Media>
              <div className="icon-box onhover-dropdown"><MoreHorizontal />
                <div className="icon-box-show onhover-show-div">
                  <UL>
                    <LI><a href='#javascript'>{Done}</a></LI>
                    <LI><a href='#javascript'>{Pending}</a></LI>
                    <LI><a href='#javascript'>{Rejected}</a></LI>
                    <LI><a href='#javascript'>{InProgress}</a></LI>
                  </UL>
                </div>
              </div>
            </Media>
          </CardHeader>
          <CardBody>
            <Row className="gy-4">
              {
                Sales2Data.map((item) => {
                  return (
                    <Col sm='6' key={item.id}>
                      <div className="widget-card">
                        <Media className="align-self-center">
                          <div className={item.class}>
                            {item.icon1}
                          </div>
                          <Media body>
                            <H6>{NewOrder}</H6>
                            <H5>{item.num1}<span className="font-roboto font-success f-w-700"><i className={item.class1}></i> {item.num2}</span></H5>
                            <div className="icon-bg">
                              {item.icon2}
                            </div>
                          </Media>
                        </Media>
                      </div>
                    </Col>
                  );
                })
              }
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default Sales1;