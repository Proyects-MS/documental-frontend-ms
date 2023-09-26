import React, { Fragment } from 'react';
import CountUp from 'react-countup';
import { Col, Card, CardHeader, Media, CardBody, Row } from 'reactstrap';
import { MoreHorizontal, } from 'react-feather';
import { H5, H6, LI, UL } from '../../../AbstractElements';
import Sales1 from './Sales1';
import { SalesData } from '../../../Data/Widgets';
import { Done, InProgress, Pending, Rejected, Saledetails } from '../../../Constant';

const Sales = () => {
  return (
    <Fragment>
      <Col xl='6' className='xl-100 box-col-12'>
        <Card className="widget-joins widget-arrow">
          <CardHeader className="pb-0">
            <Media>
              <Media body><H5>{Saledetails}</H5></Media>
              <div className="icon-box onhover-dropdown"><MoreHorizontal />
                <div className="icon-box-show onhover-show-div">
                  <UL>
                    <LI><a href='#javascript'> {Done}</a></LI>
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
                SalesData.map((item) => {
                  return (
                    <Col sm='6' key={item.id}>
                      <div className="widget-card">
                        <Media className="align-self-center">
                          <div className={item.class1}><i className={item.class2}></i></div>
                          <Media body>
                            <H6>{item.week}</H6>
                            <H5>{item.logo}<CountUp end={25698} className="counter" />
                              <span className={item.class3}>{item.num}</span></H5><span className="font-roboto"> {item.week2}</span>
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
      <Sales1 />
    </Fragment>
  );
};
export default Sales;