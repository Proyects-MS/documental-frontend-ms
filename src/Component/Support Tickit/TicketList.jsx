import React, { Fragment } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import CountUp from 'react-countup';
import { Profit, Loss, } from '../../Constant';
import { TickitData } from '../../Data/SupportTicket';
import { H3, LI, UL } from '../../AbstractElements';

const TicketList = () => {
  return (
    <Fragment>
      <Row>
        {
          TickitData.map((item) => {
            return (
              <Col xl="4" sm="6" className='box-col-4' key={item.id}>
                <Card className="ecommerce-widget">
                  <CardBody className="support-ticket-font">
                    <Row>
                      <Col xs="5"><span>{item.title}</span>
                        <H3 attrH3={{ className: 'total-num counter' }}><CountUp end={item.num} /></H3>
                      </Col>
                      <Col xs="7">
                        <div className="text-end">
                          <UL attrUL={{ className: 'simple-list' }}>
                            <LI>{Profit}<span className="product-stts txt-success ms-2">{'8989'}<i className="icon-angle-up f-12 ms-1"></i></span></LI>
                            <LI>{Loss}<span className="product-stts txt-danger ms-2">{'2560'}<i className="icon-angle-down f-12 ms-1"></i></span></LI>
                          </UL>
                        </div>
                      </Col>
                    </Row>
                    <div className="progress-showcase">
                      <div className="progress sm-progress-bar">
                        <div className={item.class} role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })
        }
      </Row>
    </Fragment>
  );
};
export default TicketList;